import {Rr_Schema} from "./../Rr_Schema";
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
  u_gateway_queues:
  {
      type: String
  },
  u_json_fields:
  {
      type: String
  },
  u_name:
  {
      type: String
  },
  u_order:
  {
      type: Number
  },
  u_source:
  {
      type: String
  },
});

export let Rr_SchemaSchema = mongooseConnection.model<Rr_Schema>('rr_schema', schema);
