/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Config_Ldap extends mongoose.Document {
  sys_created_by : String,
  sys_created_on : Date,
  sys_is_deleted : String,
  sys_mod_count : Number,
  sys_org : String,
  sys_updated_by : String,
  sys_updated_on : Date,
  u_is_active : String,
  u_base_dn_list : String,
  u_bind_dn : String,
  u_bind_password : String,
  u_crypt_prefix : String,
  u_crypt_type : String,
  u_default_domain : String,
  u_domain : String,
  u_fallback : String,
  u_gateway : String,
  u_ip_address : String,
  u_is_default : String,
  u_mode : String,
  u_password_attribute : String,
  u_port : Number,
  u_properties : String,
  u_ssl : String,
  u_uid_attribute : String,
  u_version : Number,
  u_org : String,
};
