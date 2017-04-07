/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Eric_Eventsupplementinfo extends mongoose.Document {
  sys_created_by : String,
  sys_created_on : Date,
  sys_updated_by : String,
  sys_updated_on : Date,
  sys_perm : String,
  sys_org : String,
  u_evenid : String,
  u_lastexecutedtime : String,
  u_serverserial : String,
  u_alarmname : String,
  u_maxretrycount : String,
  u_retrycount : String,
  u_status : String,
  u_supplementinfo : String,
  u_nextruntime : String,
};
