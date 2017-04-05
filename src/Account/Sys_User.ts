/// <reference path="../../typings/index.d.ts" />
import * as mongoose from 'mongoose';
import { ISys_User } from "./interfaces/ISys_User";

export class Sys_User {
  private _Sys_User:ISys_User

  constructor() {
      this._Sys_User = {} as ISys_User;
  }

  public get id (): mongoose.Types.ObjectId {
      return this._Sys_User._id;
  }

  public get sys_created_by (): String {
      return this._Sys_User.sys_created_by;
  }
  public set sys_created_by(sys_created_by : String) {
      this._Sys_User.sys_created_by = sys_created_by
  }
  public get sys_created_on (): Date {
      return this._Sys_User.sys_created_on;
  }
  public set sys_created_on(sys_created_on : Date) {
      this._Sys_User.sys_created_on = sys_created_on
  }
  public get sys_is_deleted (): String {
      return this._Sys_User.sys_is_deleted;
  }
  public set sys_is_deleted(sys_is_deleted : String) {
      this._Sys_User.sys_is_deleted = sys_is_deleted
  }
  public get sys_mod_count (): Number {
      return this._Sys_User.sys_mod_count;
  }
  public set sys_mod_count(sys_mod_count : Number) {
      this._Sys_User.sys_mod_count = sys_mod_count
  }
  public get sys_org (): String {
      return this._Sys_User.sys_org;
  }
  public set sys_org(sys_org : String) {
      this._Sys_User.sys_org = sys_org
  }
  public get sys_updated_by (): String {
      return this._Sys_User.sys_updated_by;
  }
  public set sys_updated_by(sys_updated_by : String) {
      this._Sys_User.sys_updated_by = sys_updated_by
  }
  public get sys_updated_on (): Date {
      return this._Sys_User.sys_updated_on;
  }
  public set sys_updated_on(sys_updated_on : Date) {
      this._Sys_User.sys_updated_on = sys_updated_on
  }
  public get address1 (): String {
      return this._Sys_User.address1;
  }
  public set address1(address1 : String) {
      this._Sys_User.address1 = address1
  }
  public get address2 (): String {
      return this._Sys_User.address2;
  }
  public set address2(address2 : String) {
      this._Sys_User.address2 = address2
  }
  public get answer1 (): String {
      return this._Sys_User.answer1;
  }
  public set answer1(answer1 : String) {
      this._Sys_User.answer1 = answer1
  }
  public get answer2 (): String {
      return this._Sys_User.answer2;
  }
  public set answer2(answer2 : String) {
      this._Sys_User.answer2 = answer2
  }
  public get answer3 (): String {
      return this._Sys_User.answer3;
  }
  public set answer3(answer3 : String) {
      this._Sys_User.answer3 = answer3
  }
  public get building (): String {
      return this._Sys_User.building;
  }
  public set building(building : String) {
      this._Sys_User.building = building
  }
  public get calendar_integration (): Number {
      return this._Sys_User.calendar_integration;
  }
  public set calendar_integration(calendar_integration : Number) {
      this._Sys_User.calendar_integration = calendar_integration
  }
  public get city (): String {
      return this._Sys_User.city;
  }
  public set city(city : String) {
      this._Sys_User.city = city
  }
  public get company (): String {
      return this._Sys_User.company;
  }
  public set company(company : String) {
      this._Sys_User.company = company
  }
  public get country (): String {
      return this._Sys_User.country;
  }
  public set country(country : String) {
      this._Sys_User.country = country
  }
  public get date_format (): String {
      return this._Sys_User.date_format;
  }
  public set date_format(date_format : String) {
      this._Sys_User.date_format = date_format
  }
  public get date_time_format (): String {
      return this._Sys_User.date_time_format;
  }
  public set date_time_format(date_time_format : String) {
      this._Sys_User.date_time_format = date_time_format
  }
  public get default_perspective (): String {
      return this._Sys_User.default_perspective;
  }
  public set default_perspective(default_perspective : String) {
      this._Sys_User.default_perspective = default_perspective
  }
  public get department (): String {
      return this._Sys_User.department;
  }
  public set department(department : String) {
      this._Sys_User.department = department
  }
  public get edu_status (): String {
      return this._Sys_User.edu_status;
  }
  public set edu_status(edu_status : String) {
      this._Sys_User.edu_status = edu_status
  }
  public get email (): String {
      return this._Sys_User.email;
  }
  public set email(email : String) {
      this._Sys_User.email = email
  }
  public get employee_number (): String {
      return this._Sys_User.employee_number;
  }
  public set employee_number(employee_number : String) {
      this._Sys_User.employee_number = employee_number
  }
  public get failed_attempts (): Number {
      return this._Sys_User.failed_attempts;
  }
  public set failed_attempts(failed_attempts : Number) {
      this._Sys_User.failed_attempts = failed_attempts
  }
  public get fax (): String {
      return this._Sys_User.fax;
  }
  public set fax(fax : String) {
      this._Sys_User.fax = fax
  }
  public get first_name (): String {
      return this._Sys_User.first_name;
  }
  public set first_name(first_name : String) {
      this._Sys_User.first_name = first_name
  }
  public get gender (): String {
      return this._Sys_User.gender;
  }
  public set gender(gender : String) {
      this._Sys_User.gender = gender
  }
  public get home_page (): String {
      return this._Sys_User.home_page;
  }
  public set home_page(home_page : String) {
      this._Sys_User.home_page = home_page
  }
  public get home_phone (): String {
      return this._Sys_User.home_phone;
  }
  public set home_phone(home_phone : String) {
      this._Sys_User.home_phone = home_phone
  }
  public get im (): String {
      return this._Sys_User.im;
  }
  public set im(im : String) {
      this._Sys_User.im = im
  }
  public get image (): String {
      return this._Sys_User.image;
  }
  public set image(image : String) {
      this._Sys_User.image = image
  }
  public get introduction (): String {
      return this._Sys_User.introduction;
  }
  public set introduction(introduction : String) {
      this._Sys_User.introduction = introduction
  }
  public get last_login (): Date {
      return this._Sys_User.last_login;
  }
  public set last_login(last_login : Date) {
      this._Sys_User.last_login = last_login
  }
  public get last_login_device (): String {
      return this._Sys_User.last_login_device;
  }
  public set last_login_device(last_login_device : String) {
      this._Sys_User.last_login_device = last_login_device
  }
  public get last_name (): String {
      return this._Sys_User.last_name;
  }
  public set last_name(last_name : String) {
      this._Sys_User.last_name = last_name
  }
  public get last_password (): String {
      return this._Sys_User.last_password;
  }
  public set last_password(last_password : String) {
      this._Sys_User.last_password = last_password
  }
  public get location (): String {
      return this._Sys_User.location;
  }
  public set location(location : String) {
      this._Sys_User.location = location
  }
  public get locked_out (): Boolean {
      return this._Sys_User.locked_out;
  }
  public set locked_out(locked_out : Boolean) {
      this._Sys_User.locked_out = locked_out
  }
  public get manager (): String {
      return this._Sys_User.manager;
  }
  public set manager(manager : String) {
      this._Sys_User.manager = manager
  }
  public get middle_name (): String {
      return this._Sys_User.middle_name;
  }
  public set middle_name(middle_name : String) {
      this._Sys_User.middle_name = middle_name
  }
  public get mobile_phone (): String {
      return this._Sys_User.mobile_phone;
  }
  public set mobile_phone(mobile_phone : String) {
      this._Sys_User.mobile_phone = mobile_phone
  }
  public get name (): String {
      return this._Sys_User.name;
  }
  public set name(name : String) {
      this._Sys_User.name = name
  }
  public get notification (): Number {
      return this._Sys_User.notification;
  }
  public set notification(notification : Number) {
      this._Sys_User.notification = notification
  }
  public get password_history (): String {
      return this._Sys_User.password_history;
  }
  public set password_history(password_history : String) {
      this._Sys_User.password_history = password_history
  }
  public get password_needs_reset (): Boolean {
      return this._Sys_User.password_needs_reset;
  }
  public set password_needs_reset(password_needs_reset : Boolean) {
      this._Sys_User.password_needs_reset = password_needs_reset
  }
  public get phone (): String {
      return this._Sys_User.phone;
  }
  public set phone(phone : String) {
      this._Sys_User.phone = phone
  }
  public get photo (): String {
      return this._Sys_User.photo;
  }
  public set photo(photo : String) {
      this._Sys_User.photo = photo
  }
  public get preferred_language (): String {
      return this._Sys_User.preferred_language;
  }
  public set preferred_language(preferred_language : String) {
      this._Sys_User.preferred_language = preferred_language
  }
  public get question1 (): String {
      return this._Sys_User.question1;
  }
  public set question1(question1 : String) {
      this._Sys_User.question1 = question1
  }
  public get question2 (): String {
      return this._Sys_User.question2;
  }
  public set question2(question2 : String) {
      this._Sys_User.question2 = question2
  }
  public get question3 (): String {
      return this._Sys_User.question3;
  }
  public set question3(question3 : String) {
      this._Sys_User.question3 = question3
  }
  public get source (): String {
      return this._Sys_User.source;
  }
  public set source(source : String) {
      this._Sys_User.source = source
  }
  public get start_page (): String {
      return this._Sys_User.start_page;
  }
  public set start_page(start_page : String) {
      this._Sys_User.start_page = start_page
  }
  public get state (): String {
      return this._Sys_User.state;
  }
  public set state(state : String) {
      this._Sys_User.state = state
  }
  public get street (): String {
      return this._Sys_User.street;
  }
  public set street(street : String) {
      this._Sys_User.street = street
  }
  public get summary (): String {
      return this._Sys_User.summary;
  }
  public set summary(summary : String) {
      this._Sys_User.summary = summary
  }
  public get temp_image (): String {
      return this._Sys_User.temp_image;
  }
  public set temp_image(temp_image : String) {
      this._Sys_User.temp_image = temp_image
  }
  public get time_format (): String {
      return this._Sys_User.time_format;
  }
  public set time_format(time_format : String) {
      this._Sys_User.time_format = time_format
  }
  public get time_zone (): String {
      return this._Sys_User.time_zone;
  }
  public set time_zone(time_zone : String) {
      this._Sys_User.time_zone = time_zone
  }
  public get title (): String {
      return this._Sys_User.title;
  }
  public set title(title : String) {
      this._Sys_User.title = title
  }
  public get user_name (): String {
      return this._Sys_User.user_name;
  }
  public set user_name(user_name : String) {
      this._Sys_User.user_name = user_name
  }
  public get user_password (): String {
      return this._Sys_User.user_password;
  }
  public set user_password(user_password : String) {
      this._Sys_User.user_password = user_password
  }
  public get vip (): Boolean {
      return this._Sys_User.vip;
  }
  public set vip(vip : Boolean) {
      this._Sys_User.vip = vip
  }
  public get zip (): String {
      return this._Sys_User.zip;
  }
  public set zip(zip : String) {
      this._Sys_User.zip = zip
  }
  public get u_org (): String {
      return this._Sys_User.u_org;
  }
  public set u_org(u_org : String) {
      this._Sys_User.u_org = u_org
  }
};


Object.seal(Sys_User);