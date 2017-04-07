import {Meta_Field_Properties} from "./../Meta_Field_Properties";
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
  u_allow_assign_to_me:
  {
      type: String
  },
  u_allow_download:
  {
      type: String
  },
  u_allow_file_types:
  {
      type: String
  },
  u_allow_ref_table_add:
  {
      type: String
  },
  u_allow_ref_table_remove:
  {
      type: String
  },
  u_allow_ref_table_view:
  {
      type: String
  },
  u_allow_remove:
  {
      type: String
  },
  u_allow_upload:
  {
      type: String
  },
  u_auto_assign_to_me:
  {
      type: String
  },
  u_boolean_max_length:
  {
      type: Number
  },
  u_checkbox_values:
  {
      type: String
  },
  u_choice_values:
  {
      type: String
  },
  u_date_time_has_calendar:
  {
      type: Boolean
  },
  u_decimal_max_value:
  {
      type: Number
  },
  u_decimal_min_value:
  {
      type: Number
  },
  u_default_value:
  {
      type: String
  },
  u_display_name:
  {
      type: String
  },
  u_file_upload_ref_col_name:
  {
      type: String
  },
  u_file_upload_table_name:
  {
      type: String
  },
  u_groups:
  {
      type: String
  },
  u_height:
  {
      type: Number
  },
  u_hidden_value:
  {
      type: String
  },
  u_integer_max_value:
  {
      type: Number
  },
  u_integer_min_value:
  {
      type: Number
  },
  u_is_crypt:
  {
      type: Boolean
  },
  u_is_hidden:
  {
      type: String
  },
  u_is_mandatory:
  {
      type: Boolean
  },
  u_is_read_only:
  {
      type: String
  },
  u_javascript:
  {
      type: String
  },
  u_journal_columns:
  {
      type: Number
  },
  u_journal_max_value:
  {
      type: Number
  },
  u_journal_min_value:
  {
      type: Number
  },
  u_journal_rows:
  {
      type: Number
  },
  u_label_align:
  {
      type: String
  },
  u_link_params:
  {
      type: String
  },
  u_link_target:
  {
      type: String
  },
  u_link_template:
  {
      type: String
  },
  u_list_columns:
  {
      type: Number
  },
  u_list_max_display:
  {
      type: Number
  },
  u_list_rows:
  {
      type: Number
  },
  u_list_values:
  {
      type: String
  },
  u_name:
  {
      type: String
  },
  u_order:
  {
      type: Number
  },
  u_recurse_teams_of_teams:
  {
      type: String
  },
  u_recurse_users_of_team:
  {
      type: String
  },
  u_ref_grid_ref_by_table:
  {
      type: String
  },
  u_ref_grid_ref_col_name:
  {
      type: String
  },
  u_ref_grid_sel_ref_cols:
  {
      type: String
  },
  u_ref_grid_view_popup:
  {
      type: String
  },
  u_ref_grid_popup_height:
  {
      type: String
  },
  u_ref_grid_popup_title:
  {
      type: String
  },
  u_ref_grid_popup_width:
  {
      type: String
  },
  u_ref_display_column:
  {
      type: String
  },
  u_ref_display_column_list:
  {
      type: String
  },
  u_reference_params:
  {
      type: String
  },
  u_reference_table:
  {
      type: String
  },
  u_ref_grid_table_url:
  {
      type: String
  },
  u_reference_target:
  {
      type: String
  },
  u_select_is_multi_select:
  {
      type: String
  },
  u_select_max_display:
  {
      type: Number
  },
  u_select_user_input:
  {
      type: String
  },
  u_select_values:
  {
      type: String
  },
  u_sequence_prefix:
  {
      type: String
  },
  u_size:
  {
      type: Number
  },
  u_string_max_length:
  {
      type: Number
  },
  u_string_min_length:
  {
      type: Number
  },
  u_table:
  {
      type: String
  },
  u_tp_teams_of_teams:
  {
      type: String
  },
  u_teams_of_teams:
  {
      type: String
  },
  u_tooltip:
  {
      type: String
  },
  u_ui_string_max_length:
  {
      type: Number
  },
  u_ui_type:
  {
      type: String
  },
  u_users_of_teams:
  {
      type: String
  },
  u_widget_columns:
  {
      type: Number
  },
  u_width:
  {
      type: Number
  },
  u_transient_storage:
  {
      type: String
  },
});

export let Meta_Field_PropertiesSchema = mongooseConnection.model<Meta_Field_Properties>('meta_field_properties', schema);
