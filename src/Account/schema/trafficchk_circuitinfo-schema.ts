import {Trafficchk_Circuitinfo} from "./../Trafficchk_Circuitinfo";
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
  u_trafficcolor:
  {
      type: String
  },
  u_journaltext:
  {
      type: String
  },
  u_status:
  {
      type: String
  },
  u_fmsid:
  {
      type: String
  },
  u_clliname:
  {
      type: String
  },
  u_errormessage:
  {
      type: String
  },
  u_serviceresponse:
  {
      type: String
  },
  u_remotesystem:
  {
      type: String
  },
  u_wikiattach_sysid:
  {
      type: String
  },
  u_DS0:
  {
      type: String
  },
  u_DS0_CHNL:
  {
      type: String
  },
  u_DS3:
  {
      type: String
  },
  u_switch:
  {
      type: String
  },
  u_dtc:
  {
      type: String
  },
  u_span:
  {
      type: String
  },
  u_port:
  {
      type: String
  },
  u_trunk:
  {
      type: String
  },
  u_assignment:
  {
      type: String
  },
});

export let Trafficchk_CircuitinfoSchema = mongooseConnection.model<Trafficchk_Circuitinfo>('trafficchk_circuitinfo', schema);
