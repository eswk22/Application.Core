import {IResolve_RegistrationModel} from "./Resolve_RegistrationModel";
import { DataAccess} from '../dataAccess/DataAccess'; 
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
  u_build:
  {
      type: String
  },
  u_config:
  {
      type: String
  },
  u_createtime:
  {
      type: Date
  },
  u_cronoffset:
  {
      type: Number
  },
  u_description:
  {
      type: String
  },
  u_group:
  {
      type: String
  },
  u_guid:
  {
      type: String
  },
  u_ipaddress:
  {
      type: String
  },
  u_location:
  {
      type: String
  },
  u_name:
  {
      type: String
  },
  u_status:
  {
      type: String
  },
  u_type:
  {
      type: String
  },
  u_updatetime:
  {
      type: Date
  },
  u_version:
  {
      type: String
  },
});
