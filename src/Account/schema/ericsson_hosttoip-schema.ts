import {Ericsson_Hosttoip} from "./../Ericsson_Hosttoip";
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
  u_bsc_nme:
  {
      type: String
  },
  u_bsc_ip:
  {
      type: String
  },
  u_technology:
  {
      type: String
  },
});

export let Ericsson_HosttoipSchema = mongooseConnection.model<Ericsson_Hosttoip>('ericsson_hosttoip', schema);
