import {Rb_General} from "./../Rb_General";
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
  u_generated:
  {
      type: Boolean
  },
  u_name:
  {
      type: String
  },
  u_namespace:
  {
      type: String
  },
  u_new_worksheet:
  {
      type: Boolean
  },
  u_no_of_column:
  {
      type: Number
  },
  u_summary:
  {
      type: String
  },
  wiki_id:
  {
      type: String
  },
});

export let Rb_GeneralSchema = mongooseConnection.model<Rb_General>('rb_general', schema);
