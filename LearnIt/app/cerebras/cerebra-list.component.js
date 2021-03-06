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
var CerebraListComponent = (function () {
    function CerebraListComponent(_cerebraService) {
        this._cerebraService = _cerebraService;
        this.pageTitle = 'Cerebra List';
    }
    CerebraListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._cerebraService.getCerebras().subscribe(function (cerebras) { return _this.cerebras = cerebras; }, function (error) { return _this.errorMessage = error; });
    };
    return CerebraListComponent;
}());
CerebraListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'cerebra-list.component.html',
        styleUrls: ['cerebra-list.component.css']
    }),
    __metadata("design:paramtypes", [cerebra_service_1.CerebraService])
], CerebraListComponent);
exports.CerebraListComponent = CerebraListComponent;
//# sourceMappingURL=cerebra-list.component.js.map