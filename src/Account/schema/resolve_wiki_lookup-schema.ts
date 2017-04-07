import {Resolve_Wiki_Lookup} from "./../Resolve_Wiki_Lookup";
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
  u_description:
  {
      type: String
  },
  u_module:
  {
      type: String
  },
  u_order:
  {
      type: Number
  },
  u_regex:
  {
      type: String
  },
  u_wiki:
  {
      type: String
  },
});

export let Resolve_Wiki_LookupSchema = mongooseConnection.model<Resolve_Wiki_Lookup>('resolve_wiki_lookup', schema);
