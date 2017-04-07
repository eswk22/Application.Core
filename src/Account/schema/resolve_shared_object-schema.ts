import {Resolve_Shared_Object} from "./../Resolve_Shared_Object";
import { DataAccess} from './../../dataAccess/DataAccess'; 
import * as mongooseRaw from 'mongoose';
var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;
export let Schema = mongoose.Schema;
export let ObjectId = mongoose.Schema.Types.ObjectId;
export let Mixed = mongoose.Schema.Types.Mixed;


let schema = new Schema({
  u_content:
  {
      type: String
  },
  u_name:
  {
      type: String
  },
  u_number:
  {
      type: Number
  },
});

export let Resolve_Shared_ObjectSchema = mongooseConnection.model<Resolve_Shared_Object>('resolve_shared_object', schema);
