import {Catalog_Node} from "./../Catalog_Node";
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
  u_catalogtype:
  {
      type: String
  },
  u_description:
  {
      type: String
  },
  u_displaytype:
  {
      type: String
  },
  u_editroles:
  {
      type: String
  },
  u_form:
  {
      type: String
  },
  u_icon:
  {
      type: String
  },
  u_image:
  {
      type: String
  },
  u_imagename:
  {
      type: String
  },
  u_internalname:
  {
      type: String
  },
  u_is_root:
  {
      type: String
  },
  u_is_root_ref:
  {
      type: String
  },
  u_link:
  {
      type: String
  },
  u_max_img_width:
  {
      type: Number
  },
  u_name:
  {
      type: String
  },
  u_namespace:
  {
      type: String
  },
  u_open_in_new_tab:
  {
      type: String
  },
  u_operation:
  {
      type: String
  },
  u_path:
  {
      type: String
  },
  u_ref_catalog_sys_id:
  {
      type: String
  },
  u_roles:
  {
      type: String
  },
  u_side_width:
  {
      type: Number
  },
  u_title:
  {
      type: String
  },
  u_tooltip:
  {
      type: String
  },
  u_type:
  {
      type: String
  },
  u_wiki:
  {
      type: String
  },
  u_wiki_sys_id:
  {
      type: String
  },
  u_catalog_sys_id:
  {
      type: String
  },
});

export let Catalog_NodeSchema = mongooseConnection.model<Catalog_Node>('catalog_node', schema);
