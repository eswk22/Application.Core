import {Snmp_Filter} from "./../Snmp_Filter";
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
  u_comparator:
  {
      type: String
  },
  u_ip_addresses:
  {
      type: String
  },
  u_oid:
  {
      type: String
  },
  u_read_community:
  {
      type: String
  },
  u_regex:
  {
      type: String
  },
  u_retries:
  {
      type: Number
  },
  u_snmp_version:
  {
      type: Number
  },
  u_snmp_trap_oid:
  {
      type: String
  },
  u_timeout:
  {
      type: Number
  },
  u_trap_receiver:
  {
      type: Boolean
  },
  u_value:
  {
      type: Number
  },
});

export let Snmp_FilterSchema = mongooseConnection.model<Snmp_Filter>('snmp_filter', schema);
