import {SBU_CMD_HIST} from "./../SBU_CMD_HIST";
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
  u_cmd:
  {
      type: String
  },
  u_username:
  {
      type: String
  },
  u_reqresponse:
  {
      type: String
  },
  u_ipaddress:
  {
      type: String
  },
  u_port:
  {
      type: String
  },
  u_pwd:
  {
      type: String
  },
});

export let SBU_CMD_HISTSchema = mongooseConnection.model<SBU_CMD_HIST>('sbu_cmd_hist', schema);
