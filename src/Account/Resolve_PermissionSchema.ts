import {IResolve_PermissionModel} from "./Resolve_PermissionModel";
import { DataAccess} from '../dataAccess/DataAccess'; 
var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;
export let Schema = mongoose.Schema;
export let ObjectId = mongoose.Schema.Types.ObjectId;
export let Mixed = mongoose.Schema.Types.Mixed;

let schema = new Schema({
  u_perm_id:
  {
      type: String
  },
  u_role:
  {
      type: String
  },
  u_table_name:
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
  sys_org:
  {
      type: String
  },
  sys_perm:
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
});
