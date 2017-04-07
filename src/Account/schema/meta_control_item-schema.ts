import {Meta_Control_Item} from "./../Meta_Control_Item";
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
  u_custom_table_display:
  {
      type: String
  },
  u_display_name:
  {
      type: String
  },
  u_group_display_name:
  {
      type: String
  },
  u_group_name:
  {
      type: String
  },
  u_name:
  {
      type: String
  },
  u_param:
  {
      type: String
  },
  u_sequence:
  {
      type: Number
  },
  u_type:
  {
      type: String
  },
  u_meta_control_sys_id:
  {
      type: String
  },
});

export let Meta_Control_ItemSchema = mongooseConnection.model<Meta_Control_Item>('meta_control_item', schema);
