import {Custom_Table_Parent_Example} from "./../Custom_Table_Parent_Example";
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
  sys_mod_count:
  {
      type: Number
  },
  sys_updated_by:
  {
      type: String
  },
  sys_updated_on:
  {
      type: Date
  },
  u_cb_boolean:
  {
      type: String
  },
  u_cbox_select:
  {
      type: String
  },
  u_checkbox:
  {
      type: String
  },
  u_date:
  {
      type: Date
  },
  u_datetime:
  {
      type: Date
  },
  u_journal_string:
  {
      type: String
  },
  u_list:
  {
      type: String
  },
  u_rb_choice:
  {
      type: String
  },
  u_ta_string:
  {
      type: String
  },
  u_tags:
  {
      type: String
  },
  u_tf_decimal:
  {
      type: Number
  },
  u_tf_link:
  {
      type: String
  },
  u_tf_number:
  {
      type: Number
  },
  u_tf_sequence:
  {
      type: String
  },
  u_tf_string:
  {
      type: String
  },
  u_timestamp:
  {
      type: Number
  },
  u_tf_reference:
  {
      type: String
  },
});

export let Custom_Table_Parent_ExampleSchema = mongooseConnection.model<Custom_Table_Parent_Example>('custom_table_parent_example', schema);
