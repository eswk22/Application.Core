import {SBU_LIST} from "./../SBU_LIST";
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
  u_sbu_key:
  {
      type: String
  },
  u_key_order:
  {
      type: Number
  },
  u_keyword:
  {
      type: String
  },
});

export let SBU_LISTSchema = mongooseConnection.model<SBU_LIST>('sbu_list', schema);
