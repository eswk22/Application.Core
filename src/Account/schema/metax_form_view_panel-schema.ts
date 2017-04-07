import {Metax_Form_View_Panel} from "./../Metax_Form_View_Panel";
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
  u_no_of_vertical_columns:
  {
      type: Number
  },
  u_order:
  {
      type: Number
  },
  u_panel_title:
  {
      type: String
  },
  u_panel_width:
  {
      type: Number
  },
  u_url:
  {
      type: String
  },
  u_xtype:
  {
      type: String
  },
  u_meta_form_view_sys_id:
  {
      type: String
  },
});

export let Metax_Form_View_PanelSchema = mongooseConnection.model<Metax_Form_View_Panel>('metax_form_view_panel', schema);
