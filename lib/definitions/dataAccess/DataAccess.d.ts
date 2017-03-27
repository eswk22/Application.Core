/// <reference path="../../typings/index.d.ts" />
import Mongoose = require("mongoose");
export declare class DataAccess {
    static mongooseInstance: any;
    static mongooseConnection: Mongoose.Connection;
    constructor();
    static connect(): Mongoose.Connection;
}
