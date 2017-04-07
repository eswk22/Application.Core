import {Meta_Table_View_Field} from "./../Meta_Table_View_Field";
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
  u_order:
  {
      type: Number
  },
  u_meta_field_sys_id:
  {
      type: String
  },
  u_meta_field_properties_sys_id:
  {
      type: String
  },
  u_meta_table_view_sys_id:
  {
      type: String
  },
  u_meta_view_field_sys_id:
  {
      type: String
  },
});

export let Meta_Table_View_FieldSchema = mongooseConnection.model<Meta_Table_View_Field>('meta_table_view_field', schema);
