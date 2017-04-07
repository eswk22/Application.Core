import {Tmetric_Lookup} from "./../Tmetric_Lookup";
import { DataAccess} from './../../dataAccess/DataAccess'; 
import * as mongooseRaw from 'mongoose';
var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;
export let Schema = mongoose.Schema;
export let ObjectId = mongoose.Schema.Types.ObjectId;
export let Mixed = mongoose.Schema.Types.Mixed;


let schema = new Schema({
  u_full_path:
  {
      type: String
  },
  u_path_id:
  {
      type: String
  },
  u_dt_root_doc:
  {
      type: String
  },
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
});

export let Tmetric_LookupSchema = mongooseConnection.model<Tmetric_Lookup>('tmetric_lookup', schema);
