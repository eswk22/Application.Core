import {Ericsson_Emslist} from "./../Ericsson_Emslist";
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
  u_emsid:
  {
      type: String
  },
  u_emsnodename:
  {
      type: String
  },
  u_emsipaddress:
  {
      type: String
  },
  u_emsuserid:
  {
      type: String
  },
  u_emspassword:
  {
      type: String
  },
});

export let Ericsson_EmslistSchema = mongooseConnection.model<Ericsson_Emslist>('ericsson_emslist', schema);
