import {Ssh_Pool} from "./../Ssh_Pool";
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
  sys_is_deleted:
  {
      type: String
  },
  sys_mod_count:
  {
      type: Number
  },
  sys_org:
  {
      type: String
  },
  sys_updated_by:
  {
      type: String
  },
  sys_updated_on:
  {
      type: Date
  },
  u_maxconn:
  {
      type: Number
  },
  u_queue:
  {
      type: String
  },
  u_subnetmask:
  {
      type: String
  },
  u_timeout:
  {
      type: Number
  },
});

export let Ssh_PoolSchema = mongooseConnection.model<Ssh_Pool>('ssh_pool', schema);
