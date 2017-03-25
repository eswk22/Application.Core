
import mongoosastic = require("mongoosastic");
import {IUserModel}  from "./IUserModel";
import {DataAccess} from '../dataAccess/DataAccess';
var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

export let Schema = mongoose.Schema;
export let ObjectId = mongoose.Schema.Types.ObjectId;
export let Mixed = mongoose.Schema.Types.Mixed;


let schema = new Schema({
	firstname: {
		type: String,
		es_indexed: true,
		required: true
	},
	lastname: {
		type: String,
		es_indexed: true,
		required: true
	},
	email: {
		type: String,
		es_indexed: true,
		required: false
	},
	password: {
		type: String,
		required: false
	},
	createdAt: {
		type: Date,
		required: false
	},
	modifiedAt: {
		type: Date,
		required: false
	},
	username:{
		type:String,
		required:false 
		 
	}
}).pre('save', function (next) {
	if (this._doc) { 
		let doc = <IUserModel>this._doc;
		let now = new Date();
		if (!doc.createdAt) {
			doc.createdAt = now;
		}
		doc.modifiedAt = now;
	}
	next();
	return this;
});

schema.methods.fullName = function (): string {
	return (this.firstname.trim() + " " + this.lastname.trim());
};

schema.plugin(mongoosastic, {
	host: "localhost",
	port: 9200,
	protocol: "http",
	index: 'users',
	//,auth: "username:passworvvd"
	//  ,curlDebug: true
});

export let UserSchema = mongooseConnection.model<IUserModel>('users', schema);

//UserSchema.synchronize();