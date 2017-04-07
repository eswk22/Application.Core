import {Meta_View_Field} from "./../Meta_View_Field";
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
  u_alignment:
  {
      type: String
  },
  u_dateTimeformat:
  {
      type: String
  },
  u_fixed:
  {
      type: Boolean
  },
  u_groupable:
  {
      type: Boolean
  },
  u_header:
  {
      type: String
  },
  u_id:
  {
      type: String
  },
  u_resizeable:
  {
      type: Boolean
  },
  u_rowheader:
  {
      type: Boolean
  },
  u_sortable:
  {
      type: Boolean
  },
  u_tooltip:
  {
      type: String
  },
  u_width:
  {
      type: Number
  },
});

export let Meta_View_FieldSchema = mongooseConnection.model<Meta_View_Field>('meta_view_field', schema);
