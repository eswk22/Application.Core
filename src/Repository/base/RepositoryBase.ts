   /// <reference path="../../../typings/index.d.ts" />

import IRead = require("./interfaces/Read");
import IWrite = require("./interfaces/Write");

import mongoose = require("mongoose");
 
export let ReadyState = {
  Disconnected: 0,
  Connected: 1,
  Connecting: 2,
  Disconnecting: 4
};

export interface IRepository<T extends mongoose.Document> extends IRead<T>, IWrite<T> {
  getName: () => string;
}

export class RepositoryBase<T extends mongoose.Document> implements IRepository<T> {
 
  private _model: mongoose.Model<mongoose.Document>;
 
  constructor(schemaModel: mongoose.Model<mongoose.Document>) {
    this._model = schemaModel;
  }
 
  getName(): string {
    return 'Base';
  }
 
  static generateMovieDBImageURL(path: string): string {
    if (path && path.length > 0) {
      let url = 'http://image.tmdb.org/t/p/original' + path;
      return url;
    }
    else {
      return '';
    }
  }
 
  create(item: any, callback?: (error: any, result: T) => void): Promise<T> {
    let self = this;
    let p = new Promise<T>((resolve, reject) => {
     console.log(item);
     
      self._model.create(item, (err, res) => {
        if (callback) {
          callback(err, <T>res);
        }
        if (err) {
          reject(err);
        }
        else {
          resolve(<T>res);
        }
      });
    });
 
    return p;
  }
 
  processDocuments(cond: any, processor: (doc: T) => Promise<any>, note?: string): Promise<boolean> {
    let self = this;
    if (!cond) {
      cond = {};
    }
    let p = new Promise<boolean>((resolve, reject) => {
      let stream = self._model.find(cond).stream();
      stream.on('data', function(doc: T) {
        // do something with the mongoose document
        stream.pause();
        processor(doc).then(() => {
          stream.resume();
        }).catch((err) => {
          console.log('Error with MongoDB: ' + err.message);
          console.log(self.getName());
          console.log(err);
          console.log(cond);
 
          if (note) {
            console.log(note);
          }
 
          if (mongoose.connection.readyState === ReadyState.Connected) {
            stream.resume();
          }
          else {
            reject(err);
          }
        });
      }).on('error', function(err) {
        // handle the error
 
        if (note) {
          console.log(note);
        }
 
        reject(err);
      }).on('close', function() {
        // the stream is closed
        resolve(true);
      });
    });
 
    return p;
  }
 
  retrieve(callback: (error: any, result: T[]) => void): Promise<T[]> {
    let self = this;
    let p = new Promise<T[]>((resolve, reject) => {
      self._model.find({}, (err, res) => {
        if (callback) {
          callback(err, <T[]>res);
        }
        if (err) {
          reject(err);
        }
        else {
          resolve(<T[]>res);
        }
      });
    });
 
    return p;
  }
 
  findById(id: string, callback?: (error: any, result: T) => void): Promise<T> {
    let self = this;
    let p = new Promise<T>((resolve, reject) => {
      self._model.findById(id, (err, res) => {
        if (callback) {
          callback(err, <T>res);
        }
        if (err) {
          reject(err);
        }
        else {
          resolve(<T>res);
        }
      });
    });
 
    return p;
  }
 
  findOne(cond: any, fields: any, options: any, callback?: (err: any, res: T) => void): Promise<T> {
    let self = this;
    let p = new Promise<T>((resolve, reject) => {
      self._model.findOne(cond, fields, options).exec((err, res) => {
        if (callback) {
          callback(err, <T>res);
        }
        if (err) {
          reject(err);
        }
        else {
          resolve(<T>res);
        }
      });
    });
 
    return p;
  }
 
  find(cond: any, fields: any, options: any, sortOptions?: any, callback?: (err: any, res: T[]) => void): Promise<T[]> {
    let p = new Promise<T[]>((resolve, reject) => {
      let query = this._model.find(cond, fields, options);
      if (sortOptions) {
        query = query.sort(sortOptions);
      }
 
      query.exec((err, res) => {
        if (callback) {
          callback(err, <T[]>res);
        }
        if (err) {
          reject(err);
        }
        else {
          resolve(<T[]>res);
        }
      });
    });
 
    return p;
  }
 
  count(cond?: any): Promise<number> {
    let self = this;
    let p = new Promise<number>((resolve, reject) => {
      self._model.count(cond, (err, count) => {
        if (err) {
          reject(err);
        }
        else {
          resolve(count);
        }
      });
    });
 
    return p;
  }
 
  save(item: T, callback?: (error: any, result: T) => void): Promise<T> {
    let p = new Promise<T>((resolve, reject) => {
      item.save((err, result) => {
        if (callback) {
          callback(err, <T>result);
        }
 
        if (err) {
          reject(err);
        }
        else {
          resolve(<T>result);
        }
      });
      resolve(null);
    });
 
    return p;
  }
 
  upsert(cond: any, item: any, callback?: (error: any, result: T) => void): Promise<T> {
    let self = this;
    let p = new Promise<T>((resolve, reject) => {
      let options: mongoose.FindAndUpdateOption = {
        upsert: true
      };
      self._model.findOneAndUpdate(cond, item, options, (err, result) => {
        if (err) {
          reject(err);
        }
        else {
          resolve(<T>result);
        }
      });
    });
 
    return p;
  }
 
  delete(_id: string, callback?: (error: any) => void): Promise<boolean> {
    let self = this;
    let p = new Promise<boolean>((resolve, reject) => {
      self._model.remove({ _id: this.toObjectId(_id) }, (err) => {
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
  }
 
  deleteAll(callback?: (error: any) => void): Promise<boolean> {
    let self = this;
    let p = new Promise<boolean>((resolve, reject) => {
      self._model.remove({}, (err) => {
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
  }
 
  deleteAllItems(items: T[], callback?: (error: any) => void): Promise<boolean> {
    let self = this;
    return null;
    // return Utils.eachItem(items, (item: T) => {
    //   return self.delete(item.id);
    // });
  }
 
  private toObjectId(_id: string): mongoose.Types.ObjectId {
    return mongoose.Types.ObjectId.createFromHexString(_id);
  }
 
}