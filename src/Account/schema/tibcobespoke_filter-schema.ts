import {Tibcobespoke_Filter} from "./../Tibcobespoke_Filter";
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
  u_active:
  {
      type: Boolean
  },
  u_event_eventid:
  {
      type: String
  },
  u_interval:
  {
      type: Number
  },
  u_name:
  {
      type: String
  },
  u_order:
  {
      type: Number
  },
  u_queue:
  {
      type: String
  },
  u_runbook:
  {
      type: String
  },
  u_script:
  {
      type: String
  },
  u_bus_uri:
  {
      type: String
  },
  u_certified_messaging:
  {
      type: Boolean
  },
  u_process_as_xml:
  {
      type: Boolean
  },
  u_regex:
  {
      type: String
  },
  u_reply_timeout:
  {
      type: Number
  },
  u_require_reply:
  {
      type: Boolean
  },
  u_topic:
  {
      type: String
  },
  u_unescape_xml:
  {
      type: Boolean
  },
  u_xml_query:
  {
      type: String
  },
});

export let Tibcobespoke_FilterSchema = mongooseConnection.model<Tibcobespoke_Filter>('tibcobespoke_filter', schema);
