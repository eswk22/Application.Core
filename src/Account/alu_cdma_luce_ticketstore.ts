/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Alu_Cdma_Luce_Ticketstore extends mongoose.Document {
  sys_created_by : String,
  sys_created_on : Date,
  sys_updated_by : String,
  sys_updated_on : Date,
  sys_perm : String,
  sys_org : String,
  u_ticketnumber : String,
  u_ticket_priority : String,
  u_problem_id : String,
  u_remarks : String,
  u_prblmid : String,
};
