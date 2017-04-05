/// <reference path="../../../typings/index.d.ts" />
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
exports.ReadyState = {
    Disconnected: 0,
    Connected: 1,
    Connecting: 2,
    Disconnecting: 4
};
var RepositoryBase = (function () {
    function RepositoryBase(schemaModel) {
        this._model = schemaModel;
    }
    RepositoryBase.prototype.getName = function () {
        return 'Base';
    };
    RepositoryBase.generateMovieDBImageURL = function (path) {
        if (path && path.length > 0) {
            var url = 'http://image.tmdb.org/t/p/original' + path;
            return url;
        }
        else {
            return '';
        }
    };
    RepositoryBase.prototype.create = function (item, callback) {
        var self = this;
        var p = new Promise(function (resolve, reject) {
            console.log(item);
            self._model.create(item, function (err, res) {
                if (callback) {
                    callback(err, res);
                }
                if (err) {
                    reject(err);
                }
                else {
                    resolve(res);
                }
            });
        });
        return p;
    };
    RepositoryBase.prototype.processDocuments = function (cond, processor, note) {
        var self = this;
        if (!cond) {
            cond = {};
        }
        var p = new Promise(function (resolve, reject) {
            var stream = self._model.find(cond).stream();
            stream.on('data', function (doc) {
                // do something with the mongoose document
                stream.pause();
                processor(doc).then(function () {
                    stream.resume();
                }).catch(function (err) {
                    console.log('Error with MongoDB: ' + err.message);
                    console.log(self.getName());
                    console.log(err);
                    console.log(cond);
                    if (note) {
                        console.log(note);
                    }
                    if (mongoose.connection.readyState === exports.ReadyState.Connected) {
                        stream.resume();
                    }
                    else {
                        reject(err);
                    }
                });
            }).on('error', function (err) {
                // handle the error
                if (note) {
                    console.log(note);
                }
                reject(err);
            }).on('close', function () {
                // the stream is closed
                resolve(true);
            });
        });
        return p;
    };
    RepositoryBase.prototype.retrieve = function (callback) {
        var self = this;
        var p = new Promise(function (resolve, reject) {
            self._model.find({}, function (err, res) {
                if (callback) {
                    callback(err, res);
                }
                if (err) {
                    reject(err);
                }
                else {
                    resolve(res);
                }
            });
        });
        return p;
    };
    RepositoryBase.prototype.findById = function (id, callback) {
        var self = this;
        var p = new Promise(function (resolve, reject) {
            self._model.findById(id, function (err, res) {
                if (callback) {
                    callback(err, res);
                }
                if (err) {
                    reject(err);
                }
                else {
                    resolve(res);
                }
            });
        });
        return p;
    };
    RepositoryBase.prototype.findOne = function (cond, fields, options, callback) {
        var self = this;
        var p = new Promise(function (resolve, reject) {
            self._model.findOne(cond, fields, options).exec(function (err, res) {
                if (callback) {
                    callback(err, res);
                }
                if (err) {
                    reject(err);
                }
                else {
                    resolve(res);
                }
            });
        });
        return p;
    };
    RepositoryBase.prototype.find = function (cond, fields, options, sortOptions, callback) {
        var _this = this;
        var p = new Promise(function (resolve, reject) {
            var query = _this._model.find(cond, fields, options);
            if (sortOptions) {
                query = query.sort(sortOptions);
            }
            query.exec(function (err, res) {
                if (callback) {
                    callback(err, res);
                }
                if (err) {
                    reject(err);
                }
                else {
                    resolve(res);
                }
            });
        });
        return p;
    };
    RepositoryBase.prototype.count = function (cond) {
        var self = this;
        var p = new Promise(function (resolve, reject) {
            self._model.count(cond, function (err, count) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(count);
                }
            });
        });
        return p;
    };
    RepositoryBase.prototype.save = function (item, callback) {
        var p = new Promise(function (resolve, reject) {
            item.save(function (err, result) {
                if (callback) {
                    callback(err, result);
                }
                if (err) {
                    reject(err);
                }
                else {
                    resolve(result);
                }
            });
            resolve(null);
        });
        return p;
    };
    RepositoryBase.prototype.upsert = function (cond, item, callback) {
        var self = this;
        var p = new Promise(function (resolve, reject) {
            var options = {
                upsert: true
            };
            self._model.findOneAndUpdate(cond, item, options, function (err, result) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(result);
                }
            });
        });
        return p;
    };
    RepositoryBase.prototype.delete = function (_id, callback) {
        var _this = this;
        var self = this;
        var p = new Promise(function (resolve, reject) {
            self._model.remove({ _id: _this.toObjectId(_id) }, function (err) {
                if (callback) {
                    callback(err);
                }
                if (err) {
                    reject(err);
                }
                else {
                    resolve(true);
                }
            });
        });
        return p;
    };
    RepositoryBase.prototype.deleteAll = function (callback) {
        var self = this;
        var p = new Promise(function (resolve, reject) {
            self._model.remove({}, function (err) {
                if (callback) {
                    callback(err);
                }
                if (err) {
                    reject(err);
                }
                else {
                    resolve(true);
                }
            });
        });
        return p;
    };
    RepositoryBase.prototype.deleteAllItems = function (items, callback) {
        var self = this;
        return null;
        // return Utils.eachItem(items, (item: T) => {
        //   return self.delete(item.id);
        // });
    };
    RepositoryBase.prototype.toObjectId = function (_id) {
        return mongoose.Types.ObjectId.createFromHexString(_id);
    };
    return RepositoryBase;
}());
exports.RepositoryBase = RepositoryBase;
