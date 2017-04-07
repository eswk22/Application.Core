import {Resolve_Cns_Name} from "./../Resolve_Cns_Name";
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
  u_description:
  {
      type: String
  },
  u_namespace:
  {
      type: String
  },
  u_name:
  {
      type: String
  },
  u_prefix:
  {
      type: String
  },
  u_type:
  {
      type: String
  },
  u_xpath:
  {
      type: String
  },
});

export let Resolve_Cns_NameSchema = mongooseConnection.model<Resolve_Cns_Name>('resolve_cns_name', schema);
