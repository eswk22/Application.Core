import {Ticket_Store} from "./../Ticket_Store";
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
  u_id:
  {
      type: String
  },
  u_host:
  {
      type: String
  },
  u_ticketnumber:
  {
      type: String
  },
  u_ticket_type:
  {
      type: String
  },
  u_filter_criteria:
  {
      type: String
  },
  u_ticket_status:
  {
      type: String
  },
});

export let Ticket_StoreSchema = mongooseConnection.model<Ticket_Store>('ticket_store', schema);
