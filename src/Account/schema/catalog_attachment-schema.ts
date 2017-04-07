import {Catalog_Attachment} from "./../Catalog_Attachment";
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
  u_content:
  {
      type: String
  },
  displayname:
  {
      type: String
  },
  filename:
  {
      type: String
  },
  location:
  {
      type: String
  },
  u_size:
  {
      type: Number
  },
  type:
  {
      type: String
  },
});

export let Catalog_AttachmentSchema = mongooseConnection.model<Catalog_Attachment>('catalog_attachment', schema);
