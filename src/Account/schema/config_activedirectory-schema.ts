import {Config_Activedirectory} from "./../Config_Activedirectory";
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
  u_is_active:
  {
      type: String
  },
  u_base_dn_list:
  {
      type: String
  },
  u_bind_dn:
  {
      type: String
  },
  u_bind_password:
  {
      type: String
  },
  u_default_domain:
  {
      type: String
  },
  u_domain:
  {
      type: String
  },
  u_fallback:
  {
      type: String
  },
  u_gateway:
  {
      type: String
  },
  u_ip_address:
  {
      type: String
  },
  u_is_default:
  {
      type: String
  },
  u_mode:
  {
      type: String
  },
  u_port:
  {
      type: Number
  },
  u_properties:
  {
      type: String
  },
  u_ssl:
  {
      type: String
  },
  u_uid_attribute:
  {
      type: String
  },
  u_version:
  {
      type: Number
  },
  u_org:
  {
      type: String
  },
});

export let Config_ActivedirectorySchema = mongooseConnection.model<Config_Activedirectory>('config_activedirectory', schema);
