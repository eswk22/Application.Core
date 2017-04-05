"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sys_User = (function () {
    function Sys_User() {
        this._Sys_User = {};
    }
    Object.defineProperty(Sys_User.prototype, "id", {
        get: function () {
            return this._Sys_User._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sys_User.prototype, "sys_created_by", {
        get: function () {
            return this._Sys_User.sys_created_by;
        },
        set: function (sys_created_by) {
            this._Sys_User.sys_created_by = sys_created_by;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sys_User.prototype, "sys_created_on", {
        get: function () {
            return this._Sys_User.sys_created_on;
        },
        set: function (sys_created_on) {
            this._Sys_User.sys_created_on = sys_created_on;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sys_User.prototype, "sys_is_deleted", {
        get: function () {
            return this._Sys_User.sys_is_deleted;
        },
        set: function (sys_is_deleted) {
            this._Sys_User.sys_is_deleted = sys_is_deleted;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sys_User.prototype, "sys_mod_count", {
        get: function () {
            return this._Sys_User.sys_mod_count;
        },
        set: function (sys_mod_count) {
            this._Sys_User.sys_mod_count = sys_mod_count;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sys_User.prototype, "sys_org", {
        get: function () {
            return this._Sys_User.sys_org;
        },
        set: function (sys_org) {
            this._Sys_User.sys_org = sys_org;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sys_User.prototype, "sys_updated_by", {
        get: function () {
            return this._Sys_User.sys_updated_by;
        },
        set: function (sys_updated_by) {
            this._Sys_User.sys_updated_by = sys_updated_by;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sys_User.prototype, "sys_updated_on", {
        get: function () {
            return this._Sys_User.sys_updated_on;
        },
        set: function (sys_updated_on) {
            this._Sys_User.sys_updated_on = sys_updated_on;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sys_User.prototype, "address1", {
        get: function () {
            return this._Sys_User.address1;
        },
        set: function (address1) {
            this._Sys_User.address1 = address1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sys_User.prototype, "address2", {
        get: function () {
            return this._Sys_User.address2;
        },
        set: function (address2) {
            this._Sys_User.address2 = address2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sys_User.prototype, "answer1", {
        get: function () {
            return this._Sys_User.answer1;
        },
        set: function (answer1) {
            this._Sys_User.answer1 = answer1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sys_User.prototype, "answer2", {
        get: function () {
            return this._Sys_User.answer2;
        },
        set: function (answer2) {
            this._Sys_User.answer2 = answer2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sys_User.prototype, "answer3", {
        get: function () {
            return this._Sys_User.answer3;
        },
        set: function (answer3) {
            this._Sys_User.answer3 = answer3;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sys_User.prototype, "building", {
        get: function () {
            return this._Sys_User.building;
        },
        set: function (building) {
            this._Sys_User.building = building;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sys_User.prototype, "calendar_integration", {
        get: function () {
            return this._Sys_User.calendar_integration;
        },
        set: function (calendar_integration) {
            this._Sys_User.calendar_integration = calendar_integration;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sys_User.prototype, "city", {
        get: function () {
            return this._Sys_User.city;
        },
        set: function (city) {
            this._Sys_User.city = city;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sys_User.prototype, "company", {
        get: function () {
            return this._Sys_User.company;
        },
        set: function (company) {
            this._Sys_User.company = company;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sys_User.prototype, "country", {
        get: function () {
            return this._Sys_User.country;
        },
        set: function (country) {
            this._Sys_User.country = country;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sys_User.prototype, "date_format", {
        get: function () {
            return this._Sys_User.date_format;
        },
        set: function (date_format) {
            this._Sys_User.date_format = date_format;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sys_User.prototype, "date_time_format", {
        get: function () {
            return this._Sys_User.date_time_format;
        },
        set: function (date_time_format) {
            this._Sys_User.date_time_format = date_time_format;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sys_User.prototype, "default_perspective", {
        get: function () {
            return this._Sys_User.default_perspective;
        },
        set: function (default_perspective) {
            this._Sys_User.default_perspective = default_perspective;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sys_User.prototype, "department", {
        get: function () {
            return this._Sys_User.department;
        },
        set: function (department) {
            this._Sys_User.department = department;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sys_User.prototype, "edu_status", {
        get: function () {
            return this._Sys_User.edu_status;
        },
        set: function (edu_status) {
            this._Sys_User.edu_status = edu_status;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sys_User.prototype, "email", {
        get: function () {
            return this._Sys_User.email;
        },
        set: function (email) {
            this._Sys_User.email = email;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sys_User.prototype, "employee_number", {
        get: function () {
            return this._Sys_User.employee_number;
        },
        set: function (employee_number) {
            this._Sys_User.employee_number = employee_number;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sys_User.prototype, "failed_attempts", {
        get: function () {
            return this._Sys_User.failed_attempts;
        },
        set: function (failed_attempts) {
            this._Sys_User.failed_attempts = failed_attempts;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sys_User.prototype, "fax", {
        get: function () {
            return this._Sys_User.fax;
        },
        set: function (fax) {
            this._Sys_User.fax = fax;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sys_User.prototype, "first_name", {
        get: function () {
            return this._Sys_User.first_name;
        },
        set: function (first_name) {
            this._Sys_User.first_name = first_name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sys_User.prototype, "gender", {
        get: function () {
            return this._Sys_User.gender;
        },
        set: function (gender) {
            this._Sys_User.gender = gender;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sys_User.prototype, "home_page", {
        get: function () {
            return this._Sys_User.home_page;
        },
        set: function (home_page) {
            this._Sys_User.home_page = home_page;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sys_User.prototype, "home_phone", {
        get: function () {
            return this._Sys_User.home_phone;
        },
        set: function (home_phone) {
            this._Sys_User.home_phone = home_phone;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sys_User.prototype, "im", {
        get: function () {
            return this._Sys_User.im;
        },
        set: function (im) {
            this._Sys_User.im = im;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sys_User.prototype, "image", {
        get: function () {
            return this._Sys_User.image;
        },
        set: function (image) {
            this._Sys_User.image = image;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sys_User.prototype, "introduction", {
        get: function () {
            return this._Sys_User.introduction;
        },
        set: function (introduction) {
            this._Sys_User.introduction = introduction;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sys_User.prototype, "last_login", {
        get: function () {
            return this._Sys_User.last_login;
        },
        set: function (last_login) {
            this._Sys_User.last_login = last_login;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sys_User.prototype, "last_login_device", {
        get: function () {
            return this._Sys_User.last_login_device;
        },
        set: function (last_login_device) {
            this._Sys_User.last_login_device = last_login_device;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sys_User.prototype, "last_name", {
        get: function () {
            return this._Sys_User.last_name;
        },
        set: function (last_name) {
            this._Sys_User.last_name = last_name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sys_User.prototype, "last_password", {
        get: function () {
            return this._Sys_User.last_password;
        },
        set: function (last_password) {
            this._Sys_User.last_password = last_password;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sys_User.prototype, "location", {
        get: function () {
            return this._Sys_User.location;
        },
        set: function (location) {
            this._Sys_User.location = location;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sys_User.prototype, "locked_out", {
        get: function () {
            return this._Sys_User.locked_out;
        },
        set: function (locked_out) {
            this._Sys_User.locked_out = locked_out;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sys_User.prototype, "manager", {
        get: function () {
            return this._Sys_User.manager;
        },
        set: function (manager) {
            this._Sys_User.manager = manager;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sys_User.prototype, "middle_name", {
        get: function () {
            return this._Sys_User.middle_name;
        },
        set: function (middle_name) {
            this._Sys_User.middle_name = middle_name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sys_User.prototype, "mobile_phone", {
        get: function () {
            return this._Sys_User.mobile_phone;
        },
        set: function (mobile_phone) {
            this._Sys_User.mobile_phone = mobile_phone;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sys_User.prototype, "name", {
        get: function () {
            return this._Sys_User.name;
        },
        set: function (name) {
            this._Sys_User.name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sys_User.prototype, "notification", {
        get: function () {
            return this._Sys_User.notification;
        },
        set: function (notification) {
            this._Sys_User.notification = notification;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sys_User.prototype, "password_history", {
        get: function () {
            return this._Sys_User.password_history;
        },
        set: function (password_history) {
            this._Sys_User.password_history = password_history;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sys_User.prototype, "password_needs_reset", {
        get: function () {
            return this._Sys_User.password_needs_reset;
        },
        set: function (password_needs_reset) {
            this._Sys_User.password_needs_reset = password_needs_reset;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sys_User.prototype, "phone", {
        get: function () {
            return this._Sys_User.phone;
        },
        set: function (phone) {
            this._Sys_User.phone = phone;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sys_User.prototype, "photo", {
        get: function () {
            return this._Sys_User.photo;
        },
        set: function (photo) {
            this._Sys_User.photo = photo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sys_User.prototype, "preferred_language", {
        get: function () {
            return this._Sys_User.preferred_language;
        },
        set: function (preferred_language) {
            this._Sys_User.preferred_language = preferred_language;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sys_User.prototype, "question1", {
        get: function () {
            return this._Sys_User.question1;
        },
        set: function (question1) {
            this._Sys_User.question1 = question1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sys_User.prototype, "question2", {
        get: function () {
            return this._Sys_User.question2;
        },
        set: function (question2) {
            this._Sys_User.question2 = question2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sys_User.prototype, "question3", {
        get: function () {
            return this._Sys_User.question3;
        },
        set: function (question3) {
            this._Sys_User.question3 = question3;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sys_User.prototype, "source", {
        get: function () {
            return this._Sys_User.source;
        },
        set: function (source) {
            this._Sys_User.source = source;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sys_User.prototype, "start_page", {
        get: function () {
            return this._Sys_User.start_page;
        },
        set: function (start_page) {
            this._Sys_User.start_page = start_page;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sys_User.prototype, "state", {
        get: function () {
            return this._Sys_User.state;
        },
        set: function (state) {
            this._Sys_User.state = state;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sys_User.prototype, "street", {
        get: function () {
            return this._Sys_User.street;
        },
        set: function (street) {
            this._Sys_User.street = street;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sys_User.prototype, "summary", {
        get: function () {
            return this._Sys_User.summary;
        },
        set: function (summary) {
            this._Sys_User.summary = summary;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sys_User.prototype, "temp_image", {
        get: function () {
            return this._Sys_User.temp_image;
        },
        set: function (temp_image) {
            this._Sys_User.temp_image = temp_image;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sys_User.prototype, "time_format", {
        get: function () {
            return this._Sys_User.time_format;
        },
        set: function (time_format) {
            this._Sys_User.time_format = time_format;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sys_User.prototype, "time_zone", {
        get: function () {
            return this._Sys_User.time_zone;
        },
        set: function (time_zone) {
            this._Sys_User.time_zone = time_zone;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sys_User.prototype, "title", {
        get: function () {
            return this._Sys_User.title;
        },
        set: function (title) {
            this._Sys_User.title = title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sys_User.prototype, "user_name", {
        get: function () {
            return this._Sys_User.user_name;
        },
        set: function (user_name) {
            this._Sys_User.user_name = user_name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sys_User.prototype, "user_password", {
        get: function () {
            return this._Sys_User.user_password;
        },
        set: function (user_password) {
            this._Sys_User.user_password = user_password;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sys_User.prototype, "vip", {
        get: function () {
            return this._Sys_User.vip;
        },
        set: function (vip) {
            this._Sys_User.vip = vip;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sys_User.prototype, "zip", {
        get: function () {
            return this._Sys_User.zip;
        },
        set: function (zip) {
            this._Sys_User.zip = zip;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sys_User.prototype, "u_org", {
        get: function () {
            return this._Sys_User.u_org;
        },
        set: function (u_org) {
            this._Sys_User.u_org = u_org;
        },
        enumerable: true,
        configurable: true
    });
    return Sys_User;
}());
exports.Sys_User = Sys_User;
;
Object.seal(Sys_User);
