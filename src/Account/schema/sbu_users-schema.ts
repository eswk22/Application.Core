import {SBU_Users} from "./../SBU_Users";
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
  u_requestresponse:
  {
      type: String
  },
  u_reqdate:
  {
      type: Date
  },
  u_username:
  {
      type: String
  },
  u_reqresponse:
  {
      type: String
  },
  u_reqcmd:
  {
      type: String
  },
});

export let SBU_UsersSchema = mongooseConnection.model<SBU_Users>('sbu_users', schema);
