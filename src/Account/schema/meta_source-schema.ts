import {Meta_Source} from "./../Meta_Source";
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
  u_dbtype:
  {
      type: String
  },
  u_display_name:
  {
      type: String
  },
  u_name:
  {
      type: String
  },
  u_source:
  {
      type: String
  },
  u_type:
  {
      type: String
  },
  u_meta_field_properties_sys_id:
  {
      type: String
  },
  u_meta_form_view_sys_id:
  {
      type: String
  },
});

export let Meta_SourceSchema = mongooseConnection.model<Meta_Source>('meta_source', schema);
