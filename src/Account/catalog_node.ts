/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Catalog_Node extends mongoose.Document {
  sys_created_by : String,
  sys_created_on : Date,
  sys_is_deleted : String,
  sys_mod_count : Number,
  sys_org : String,
  sys_updated_by : String,
  sys_updated_on : Date,
  u_catalogtype : String,
  u_description : String,
  u_displaytype : String,
  u_editroles : String,
  u_form : String,
  u_icon : String,
  u_image : String,
  u_imagename : String,
  u_internalname : String,
  u_is_root : String,
  u_is_root_ref : String,
  u_link : String,
  u_max_img_width : Number,
  u_name : String,
  u_namespace : String,
  u_open_in_new_tab : String,
  u_operation : String,
  u_path : String,
  u_ref_catalog_sys_id : String,
  u_roles : String,
  u_side_width : Number,
  u_title : String,
  u_tooltip : String,
  u_type : String,
  u_wiki : String,
  u_wiki_sys_id : String,
  u_catalog_sys_id : String,
};
