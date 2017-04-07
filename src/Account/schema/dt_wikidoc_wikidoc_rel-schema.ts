import {Dt_Wikidoc_Wikidoc_Rel} from "./../Dt_Wikidoc_Wikidoc_Rel";
import { DataAccess} from './../../dataAccess/DataAccess'; 
import * as mongooseRaw from 'mongoose';
var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;
export let Schema = mongoose.Schema;
export let ObjectId = mongoose.Schema.Types.ObjectId;
export let Mixed = mongoose.Schema.Types.Mixed;


let schema = new Schema({
  u_wikidoc_fullname:
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
  u_dt_wikidoc_sys_id:
  {
      type: String
  },
});

export let Dt_Wikidoc_Wikidoc_RelSchema = mongooseConnection.model<Dt_Wikidoc_Wikidoc_Rel>('dt_wikidoc_wikidoc_rel', schema);
