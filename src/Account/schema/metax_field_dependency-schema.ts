import {Metax_Field_Dependency} from "./../Metax_Field_Dependency";
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
  u_action:
  {
      type: String
  },
  u_action_options:
  {
      type: String
  },
  u_condition:
  {
      type: String
  },
  u_target:
  {
      type: String
  },
  u_value:
  {
      type: String
  },
  u_meta_control_item_sys_id:
  {
      type: String
  },
  u_meta_field_prop_sys_id:
  {
      type: String
  },
  u_meta_form_tab_sys_id:
  {
      type: String
  },
});

export let Metax_Field_DependencySchema = mongooseConnection.model<Metax_Field_Dependency>('metax_field_dependency', schema);
