import {Wikidoc_Rating_Resolution} from "./../Wikidoc_Rating_Resolution";
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
  u_1_star_count:
  {
      type: Number
  },
  u_2_star_count:
  {
      type: Number
  },
  u_3_star_count:
  {
      type: Number
  },
  u_4_star_count:
  {
      type: Number
  },
  u_5_star_count:
  {
      type: Number
  },
  u_init_count:
  {
      type: Number
  },
  u_init_total:
  {
      type: Number
  },
  u_wikidoc_sys_id:
  {
      type: String
  },
});

export let Wikidoc_Rating_ResolutionSchema = mongooseConnection.model<Wikidoc_Rating_Resolution>('wikidoc_rating_resolution', schema);
