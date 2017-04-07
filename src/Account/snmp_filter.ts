/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Snmp_Filter extends mongoose.Document {
  sys_created_by : String,
  sys_created_on : Date,
  sys_is_deleted : String,
  sys_mod_count : Number,
  sys_org : String,
  sys_updated_by : String,
  sys_updated_on : Date,
  u_active : Boolean,
  u_event_eventid : String,
  u_interval : Number,
  u_name : String,
  u_order : Number,
  u_queue : String,
  u_runbook : String,
  u_script : String,
  u_comparator : String,
  u_ip_addresses : String,
  u_oid : String,
  u_read_community : String,
  u_regex : String,
  u_retries : Number,
  u_snmp_version : Number,
  u_snmp_trap_oid : String,
  u_timeout : Number,
  u_trap_receiver : Boolean,
  u_value : Number,
};
