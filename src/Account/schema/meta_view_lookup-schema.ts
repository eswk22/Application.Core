import {Meta_View_Lookup} from "./../Meta_View_Lookup";
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
  u_app_name:
  {
      type: String
  },
  u_order:
  {
      type: Number
  },
  u_roles:
  {
      type: String
  },
  u_view_name:
  {
      type: String
  },
});

export let Meta_View_LookupSchema = mongooseConnection.model<Meta_View_Lookup>('meta_view_lookup', schema);
