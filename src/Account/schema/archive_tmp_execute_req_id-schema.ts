import {Archive_Tmp_Execute_Req_Id} from "./../Archive_Tmp_Execute_Req_Id";
import { DataAccess} from './../../dataAccess/DataAccess'; 
import * as mongooseRaw from 'mongoose';
var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;
export let Schema = mongoose.Schema;
export let ObjectId = mongoose.Schema.Types.ObjectId;
export let Mixed = mongoose.Schema.Types.Mixed;


let schema = new Schema({
  u_problem:
  {
      type: String
  },
});

export let Archive_Tmp_Execute_Req_IdSchema = mongooseConnection.model<Archive_Tmp_Execute_Req_Id>('archive_tmp_execute_req_id', schema);
