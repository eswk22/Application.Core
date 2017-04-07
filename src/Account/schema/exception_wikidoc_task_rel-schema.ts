import {Exception_Wikidoc_Task_Rel} from "./../Exception_Wikidoc_Task_Rel";
import { DataAccess} from './../../dataAccess/DataAccess'; 
import * as mongooseRaw from 'mongoose';
var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;
export let Schema = mongoose.Schema;
export let ObjectId = mongoose.Schema.Types.ObjectId;
export let Mixed = mongoose.Schema.Types.Mixed;


let schema = new Schema({
  u_actiontask_fullname:
  {
      type: String
  },
  sys_created_by:
  {
      type: String
  },
  sys_created_on:
  {
      type: Date
  },
  sys_mod_count:
  {
      type: Number
  },
  sys_updated_by:
  {
      type: String
  },
  sys_updated_on:
  {
      type: Date
  },
  u_exception_wikidoc_sys_id:
  {
      type: String
  },
});

export let Exception_Wikidoc_Task_RelSchema = mongooseConnection.model<Exception_Wikidoc_Task_Rel>('exception_wikidoc_task_rel', schema);
