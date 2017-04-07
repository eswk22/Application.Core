/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Trafficchk_Circuitinfo extends mongoose.Document {
  sys_created_by : String,
  sys_created_on : Date,
  sys_updated_by : String,
  sys_updated_on : Date,
  sys_perm : String,
  sys_org : String,
  u_trafficcolor : String,
  u_journaltext : String,
  u_status : String,
  u_fmsid : String,
  u_clliname : String,
  u_errormessage : String,
  u_serviceresponse : String,
  u_remotesystem : String,
  u_wikiattach_sysid : String,
  u_DS0 : String,
  u_DS0_CHNL : String,
  u_DS3 : String,
  u_switch : String,
  u_dtc : String,
  u_span : String,
  u_port : String,
  u_trunk : String,
  u_assignment : String,
};
