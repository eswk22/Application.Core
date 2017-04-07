import {Meta_Form_Tab_Field} from "./../Meta_Form_Tab_Field";
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
  u_column_number:
  {
      type: Number
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
  u_meta_form_tab_sys_id:
  {
      type: String
  },
  u_meta_source_sys_id:
  {
      type: String
  },
});

export let Meta_Form_Tab_FieldSchema = mongooseConnection.model<Meta_Form_Tab_Field>('meta_form_tab_field', schema);
