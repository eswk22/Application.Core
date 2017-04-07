/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Ticket_Store extends mongoose.Document {
  sys_created_by : String,
  sys_created_on : Date,
  sys_updated_by : String,
  sys_updated_on : Date,
  sys_perm : String,
  sys_org : String,
  u_id : String,
  u_host : String,
  u_ticketnumber : String,
  u_ticket_type : String,
  u_filter_criteria : String,
  u_ticket_status : String,
};
