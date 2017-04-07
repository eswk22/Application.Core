import {Wikidoc_Rating_Quality} from "./../Wikidoc_Rating_Quality";
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
  sys_is_deleted:
  {
      type: String
  },
  sys_mod_count:
  {
      type: Number
  },
  sys_org:
  {
      type: String
  },
  sys_updated_by:
  {
      type: String
  },
  sys_updated_on:
  {
      type: Date
  },
  u_feedback:
  {
      type: String
  },
  u_star_count:
  {
      type: Number
  },
  u_wikidoc_sys_id:
  {
      type: String
  },
});

export let Wikidoc_Rating_QualitySchema = mongooseConnection.model<Wikidoc_Rating_Quality>('wikidoc_rating_quality', schema);
