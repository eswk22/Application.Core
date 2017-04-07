import {Customfilerespoitory} from "./../Customfilerespoitory";
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
  u_filename:
  {
      type: String
  },
  u_aliasfilename:
  {
      type: String
  },
  u_status:
  {
      type: String
  },
  u_errormessage:
  {
      type: String
  },
  u_wikiattach_sysid:
  {
      type: String
  },
  u_uploadedby:
  {
      type: String
  },
  u_uploadedon:
  {
      type: String
  },
  u_uploaded_on:
  {
      type: Date
  },
});

export let CustomfilerespoitorySchema = mongooseConnection.model<Customfilerespoitory>('customfilerespoitory', schema);
