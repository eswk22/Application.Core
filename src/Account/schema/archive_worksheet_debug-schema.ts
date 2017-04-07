import {Archive_Worksheet_Debug} from "./../Archive_Worksheet_Debug";
import { DataAccess} from './../../dataAccess/DataAccess'; 
import * as mongooseRaw from 'mongoose';
var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;
export let Schema = mongoose.Schema;
export let ObjectId = mongoose.Schema.Types.ObjectId;
export let Mixed = mongoose.Schema.Types.Mixed;


let schema = new Schema({
  u_debug:
  {
      type: String
  },
  u_timestamp:
  {
      type: Number
  },
  sys_created_by:
  {
      type: String
  },
  sys_created_on:
  {
      type: Date
  },
  sys_mod_count:
  {
      type: Number
  },
  sys_updated_by:
  {
      type: String
  },
  sys_updated_on:
  {
      type: Date
  },
  u_worksheet:
  {
      type: String
  },
});

export let Archive_Worksheet_DebugSchema = mongooseConnection.model<Archive_Worksheet_Debug>('archive_worksheet_debug', schema);
