import {Resolve_Preprocess_Rel} from "./../Resolve_Preprocess_Rel";
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
  u_ref_preprocess:
  {
      type: String
  },
  u_preprocess_sys_id:
  {
      type: String
  },
});

export let Resolve_Preprocess_RelSchema = mongooseConnection.model<Resolve_Preprocess_Rel>('resolve_preprocess_rel', schema);
