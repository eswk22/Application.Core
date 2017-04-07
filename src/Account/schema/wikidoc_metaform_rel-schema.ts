import {Wikidoc_Metaform_Rel} from "./../Wikidoc_Metaform_Rel";
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
  u_description:
  {
      type: String
  },
  u_metaform_name:
  {
      type: String
  },
  u_is_default_role:
  {
      type: String
  },
  u_name:
  {
      type: String
  },
  u_type:
  {
      type: String
  },
  u_wikidoc_fullname:
  {
      type: String
  },
  u_accessrights:
  {
      type: String
  },
  u_metaform_sys_id:
  {
      type: String
  },
  u_wikidoc_sys_id:
  {
      type: String
  },
});

export let Wikidoc_Metaform_RelSchema = mongooseConnection.model<Wikidoc_Metaform_Rel>('wikidoc_metaform_rel', schema);
