import {Resolve_Archive} from "./../Resolve_Archive";
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
  u_comment:
  {
      type: String
  },
  u_patch:
  {
      type: String
  },
  u_table_column:
  {
      type: String
  },
  u_table_sys_id:
  {
      type: String
  },
  u_table_name:
  {
      type: String
  },
  u_version:
  {
      type: Number
  },
});

export let Resolve_ArchiveSchema = mongooseConnection.model<Resolve_Archive>('resolve_archive', schema);
