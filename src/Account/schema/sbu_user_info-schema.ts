import {SBU_USER_INFO} from "./../SBU_USER_INFO";
import { DataAccess} from './../../dataAccess/DataAccess'; 
import * as mongooseRaw from 'mongoose';
var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;
export let Schema = mongoose.Schema;
export let ObjectId = mongoose.Schema.Types.ObjectId;
export let Mixed = mongoose.Schema.Types.Mixed;


let schema = new Schema({
  sys_created_by:
  {
      type: String
  },
  sys_created_on:
  {
      type: Date
  },
  sys_updated_by:
  {
      type: String
  },
  sys_updated_on:
  {
      type: Date
  },
  sys_perm:
  {
      type: String
  },
  sys_org:
  {
      type: String
  },
  u_username:
  {
      type: String
  },
  u_password:
  {
      type: String
  },
  u_active:
  {
      type: String
  },
});

export let SBU_USER_INFOSchema = mongooseConnection.model<SBU_USER_INFO>('sbu_user_info', schema);
