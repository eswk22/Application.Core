import {Resolve_Impex_Module} from "./../Resolve_Impex_Module";
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
  u_dirty:
  {
      type: Boolean
  },
  u_forward_to_document:
  {
      type: String
  },
  u_location:
  {
      type: String
  },
  u_name:
  {
      type: String
  },
  u_script_name:
  {
      type: String
  },
  u_version:
  {
      type: String
  },
  u_zip_file_content:
  {
      type: String
  },
  u_zip_file_name:
  {
      type: String
  },
});

export let Resolve_Impex_ModuleSchema = mongooseConnection.model<Resolve_Impex_Module>('resolve_impex_module', schema);
