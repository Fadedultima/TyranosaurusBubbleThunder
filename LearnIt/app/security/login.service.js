"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var firebase = require("firebase");
var UserService = (function () {
    function UserService(router) {
        this.router = router;
        this.userLoggedIn = false;
        firebase.initializeApp({
            apiKey: "AIzaSyC27jCPIG57MxRG2w8h8aSdSXPOUUXXnHM",
            authDomain: "learnit-6c416.firebaseapp.com",
            databaseURL: "https://learnit-6c416.firebaseio.com",
            projectId: "learnit-6c416",
            storageBucket: "learnit-6c416.appspot.com",
            messagingSenderId: "911343383900"
        });
    }
    UserService.prototype.canActivate = function (route, state) {
        var url = state.url;
        return this.verifyLogin(url);
    };
    UserService.prototype.verifyLogin = function (url) {
        if (this.userLoggedIn) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=login.service.js.map