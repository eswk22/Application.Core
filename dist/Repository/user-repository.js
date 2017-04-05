"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var RepositoryBase_1 = require("./Base/RepositoryBase");
var Sys_UserSchema_1 = require("../Account/Sys_UserSchema");
var UserRepository = (function (_super) {
    tslib_1.__extends(UserRepository, _super);
    function UserRepository() {
        return _super.call(this, Sys_UserSchema_1.UserSchema) || this;
    }
    return UserRepository;
}(RepositoryBase_1.RepositoryBase));
exports.UserRepository = UserRepository;
var UserRepository1 = new RepositoryBase_1.RepositoryBase(Sys_UserSchema_1.UserSchema);
Object.seal(UserRepository);
