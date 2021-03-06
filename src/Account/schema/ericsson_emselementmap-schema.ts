import {Ericsson_Emselementmap} from "./../Ericsson_Emselementmap";
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
  u_elementid:
  {
      type: String
  },
  u_elementnodename:
  {
      type: String
  },
  u_ipaddress:
  {
      type: String
  },
  u_userid:
  {
      type: String
  },
  u_password:
  {
      type: String
  },
  u_emsid:
  {
      type: String
  },
  u_extradata:
  {
      type: String
  },
  u_elementtype:
  {
      type: String
  },
});

export let Ericsson_EmselementmapSchema = mongooseConnection.model<Ericsson_Emselementmap>('ericsson_emselementmap', schema);
