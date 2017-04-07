import {Resolve_Action_Pt2_Relation} from "./../Resolve_Action_Pt2_Relation";
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
  u_category:
  {
      type: String
  },
  u_task:
  {
      type: String
  },
});

export let Resolve_Action_Pt2_RelationSchema = mongooseConnection.model<Resolve_Action_Pt2_Relation>('resolve_action_pt2_relation', schema);
