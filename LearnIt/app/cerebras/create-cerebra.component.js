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
var cerebra_service_1 = require("./cerebra.service");
var CreateCerebraComponent = (function () {
    function CreateCerebraComponent(_cerebraService) {
        this._cerebraService = _cerebraService;
        this.pageTitle = 'Create Cerebra';
    }
    CreateCerebraComponent.prototype.ngOnInit = function () {
    };
    CreateCerebraComponent.prototype.createNewCerebra = function () {
        console.log("Cerebra Name: " + this.cerebra.cerebraName);
    };
    CreateCerebraComponent.prototype.getNewCerebra = function () {
    };
    return CreateCerebraComponent;
}());
CreateCerebraComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'create-cerebra.component.html',
        styleUrls: ['create-cerebra.component.css']
    }),
    __metadata("design:paramtypes", [cerebra_service_1.CerebraService])
], CreateCerebraComponent);
exports.CreateCerebraComponent = CreateCerebraComponent;
//creator
//description
//array of tasks
//lists node
//generate random id
//favorite value is set to 0
//timestamp set to current time
//console.log( "Cerebra Description: " + this.cerebraDescription);
//        console.log( "Cerebra Tasks: " + this.cerebraTasks);
//        console.log( "Cerebra Tags: " + this.cerebraTags);
//# sourceMappingURL=create-cerebra.component.js.map