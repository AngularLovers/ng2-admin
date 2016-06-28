"use strict";
var uuid_1 = require('./../util/uuid');
var UserModel = (function () {
    function UserModel(name) {
        this.name = name;
        this.id = uuid_1.uuid();
    }
    return UserModel;
}());
exports.UserModel = UserModel;
