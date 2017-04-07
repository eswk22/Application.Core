import {Meta_Table_View} from "./../Meta_Table_View";
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
  u_create_form_id:
  {
      type: String
  },
  u_display_name:
  {
      type: String
  },
  u_edit_form_id:
  {
      type: String
  },
  u_is_global:
  {
      type: Boolean
  },
  meta_form_link:
  {
      type: String
  },
  meta_new_link:
  {
      type: String
  },
  u_name:
  {
      type: String
  },
  u_params:
  {
      type: String
  },
  u_target:
  {
      type: String
  },
  u_type:
  {
      type: String
  },
  u_user:
  {
      type: String
  },
  u_meta_access_rights_sys_id:
  {
      type: String
  },
  u_meta_control_sys_id:
  {
      type: String
  },
  u_meta_table_sys_id:
  {
      type: String
  },
  u_parent_sys_id:
  {
      type: String
  },
});

export let Meta_Table_ViewSchema = mongooseConnection.model<Meta_Table_View>('meta_table_view', schema);
