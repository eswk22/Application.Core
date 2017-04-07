import {Meta_Form_View} from "./../Meta_Form_View";
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
  u_display_name:
  {
      type: String
  },
  u_form_name:
  {
      type: String
  },
  u_is_header_visible:
  {
      type: String
  },
  u_is_view_collapsible:
  {
      type: String
  },
  u_is_wizard:
  {
      type: String
  },
  u_table_display_name:
  {
      type: String
  },
  u_table_name:
  {
      type: String
  },
  u_view_name:
  {
      type: String
  },
  u_wiki_name:
  {
      type: String
  },
  u_window_title:
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
});

export let Meta_Form_ViewSchema = mongooseConnection.model<Meta_Form_View>('meta_form_view', schema);
