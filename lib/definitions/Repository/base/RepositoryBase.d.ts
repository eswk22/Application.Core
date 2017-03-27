/// <reference path="../../../typings/index.d.ts" />
import IRead = require("./interfaces//Read");
import IWrite = require("./interfaces/Write");
import mongoose = require("mongoose");
export declare class RepositoryBase<T extends mongoose.Document> implements IRead<T>, IWrite<T> {
    private _model;
    constructor(schemaModel: mongoose.Model<mongoose.Document>);
    create(item: T, callback: (error: any, result: any) => void): void;
    retrieve(callback: (error: any, result: any) => void): void;
    update(_id: mongoose.Types.ObjectId, item: T, callback: (error: any, result: any) => void): void;
    delete(_id: string, callback: (error: any, result: any) => void): void;
    findById(_id: string, callback: (error: any, result: T) => void): void;
    private toObjectId(_id);
}
