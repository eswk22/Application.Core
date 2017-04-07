import {Ericsson_Eventinfo} from "./../Ericsson_Eventinfo";
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
  sys_updated_by:
  {
      type: String
  },
  sys_updated_on:
  {
      type: Date
  },
  sys_perm:
  {
      type: String
  },
  sys_org:
  {
      type: String
  },
  u_agent:
  {
      type: String
  },
  u_alertgroup:
  {
      type: String
  },
  u_alertname:
  {
      type: String
  },
  u_clearedby:
  {
      type: String
  },
  u_element:
  {
      type: String
  },
  u_elementstatus:
  {
      type: String
  },
  u_emsname:
  {
      type: String
  },
  u_eventid:
  {
      type: String
  },
  u_firstoccurrence:
  {
      type: String
  },
  u_faultowner:
  {
      type: String
  },
  u_freqband:
  {
      type: String
  },
  u_node:
  {
      type: String
  },
  u_hostname:
  {
      type: String
  },
  u_lastoccurrence:
  {
      type: String
  },
  u_nodealias:
  {
      type: String
  },
  u_severity:
  {
      type: String
  },
  u_serverserial:
  {
      type: String
  },
  u_sitepriority:
  {
      type: String
  },
  u_summary:
  {
      type: String
  },
  u_sourceservername:
  {
      type: String
  },
  u_sourceserserver:
  {
      type: String
  },
  u_ticketnumber:
  {
      type: String
  },
  u_technology:
  {
      type: String
  },
  u_ticketflag:
  {
      type: String
  },
  u_cnsind:
  {
      type: String
  },
  u_cnstype:
  {
      type: String
  },
  u_backhaultype:
  {
      type: String
  },
  u_backhaulaccesstype:
  {
      type: String
  },
  u_ipa:
  {
      type: String
  },
  u_drms:
  {
      type: String
  },
  u_alertkey:
  {
      type: String
  },
  u_identifier:
  {
      type: String
  },
  u_threshold:
  {
      type: String
  },
  u_region:
  {
      type: String
  },
  u_oemmarketvendor:
  {
      type: String
  },
  u_cascade:
  {
      type: String
  },
  u_runbook_status:
  {
      type: String
  },
  u_runbook_position:
  {
      type: String
  },
  u_ticketstatus:
  {
      type: String
  },
  u_prblmid:
  {
      type: String
  },
  u_problemid:
  {
      type: String
  },
});

export let Ericsson_EventinfoSchema = mongooseConnection.model<Ericsson_Eventinfo>('ericsson_eventinfo', schema);
