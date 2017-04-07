import {Alu_Cdma_Luce_Ticketstore} from "./../Alu_Cdma_Luce_Ticketstore";
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
  u_ticketnumber:
  {
      type: String
  },
  u_ticket_priority:
  {
      type: String
  },
  u_problem_id:
  {
      type: String
  },
  u_remarks:
  {
      type: String
  },
  u_prblmid:
  {
      type: String
  },
});

export let Alu_Cdma_Luce_TicketstoreSchema = mongooseConnection.model<Alu_Cdma_Luce_Ticketstore>('alu_cdma_luce_ticketstore', schema);
