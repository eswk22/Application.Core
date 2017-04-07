/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Customfilerespoitory extends mongoose.Document {
  sys_created_by : String,
  sys_created_on : Date,
  sys_updated_by : String,
  sys_updated_on : Date,
  sys_perm : String,
  sys_org : String,
  u_filename : String,
  u_aliasfilename : String,
  u_status : String,
  u_errormessage : String,
  u_wikiattach_sysid : String,
  u_uploadedby : String,
  u_uploadedon : String,
  u_uploaded_on : Date,
};
