import {Resolve_Parser_Template} from "./../Resolve_Parser_Template";
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
  u_match_regex:
  {
      type: String
  },
  u_name_pos:
  {
      type: String
  },
  u_type:
  {
      type: String
  },
  u_value_pos:
  {
      type: String
  },
  u_parser:
  {
      type: String
  },
});

export let Resolve_Parser_TemplateSchema = mongooseConnection.model<Resolve_Parser_Template>('resolve_parser_template', schema);
