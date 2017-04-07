import {Sys_User} from "./../Sys_User";
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
  address1:
  {
      type: String
  },
  address2:
  {
      type: String
  },
  answer1:
  {
      type: String
  },
  answer2:
  {
      type: String
  },
  answer3:
  {
      type: String
  },
  building:
  {
      type: String
  },
  calendar_integration:
  {
      type: Number
  },
  city:
  {
      type: String
  },
  company:
  {
      type: String
  },
  country:
  {
      type: String
  },
  date_format:
  {
      type: String
  },
  date_time_format:
  {
      type: String
  },
  default_perspective:
  {
      type: String
  },
  department:
  {
      type: String
  },
  edu_status:
  {
      type: String
  },
  email:
  {
      type: String
  },
  employee_number:
  {
      type: String
  },
  failed_attempts:
  {
      type: Number
  },
  fax:
  {
      type: String
  },
  first_name:
  {
      type: String
  },
  gender:
  {
      type: String
  },
  home_page:
  {
      type: String
  },
  home_phone:
  {
      type: String
  },
  im:
  {
      type: String
  },
  image:
  {
      type: String
  },
  introduction:
  {
      type: String
  },
  last_login:
  {
      type: Date
  },
  last_login_device:
  {
      type: String
  },
  last_name:
  {
      type: String
  },
  last_password:
  {
      type: String
  },
  location:
  {
      type: String
  },
  locked_out:
  {
      type: Boolean
  },
  manager:
  {
      type: String
  },
  middle_name:
  {
      type: String
  },
  mobile_phone:
  {
      type: String
  },
  name:
  {
      type: String
  },
  notification:
  {
      type: Number
  },
  password_history:
  {
      type: String
  },
  password_needs_reset:
  {
      type: Boolean
  },
  phone:
  {
      type: String
  },
  photo:
  {
      type: String
  },
  preferred_language:
  {
      type: String
  },
  question1:
  {
      type: String
  },
  question2:
  {
      type: String
  },
  question3:
  {
      type: String
  },
  source:
  {
      type: String
  },
  start_page:
  {
      type: String
  },
  state:
  {
      type: String
  },
  street:
  {
      type: String
  },
  summary:
  {
      type: String
  },
  temp_image:
  {
      type: String
  },
  time_format:
  {
      type: String
  },
  time_zone:
  {
      type: String
  },
  title:
  {
      type: String
  },
  user_name:
  {
      type: String
  },
  user_password:
  {
      type: String
  },
  vip:
  {
      type: Boolean
  },
  zip:
  {
      type: String
  },
  u_org:
  {
      type: String
  },
});

export let Sys_UserSchema = mongooseConnection.model<Sys_User>('sys_user', schema);
