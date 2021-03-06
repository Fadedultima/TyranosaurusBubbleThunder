"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CerebraFilterPipe = (function () {
    function CerebraFilterPipe() {
    }
    CerebraFilterPipe.prototype.transform = function (value, filterBy) {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter(function (cerebra) { return cerebra.cerebraName.toLocaleLowerCase().indexOf(filterBy) !== -1; }) : value;
    };
    return CerebraFilterPipe;
}());
CerebraFilterPipe = __decorate([
    core_1.Pipe({
        name: 'cerebraFilter'
    })
], CerebraFilterPipe);
exports.CerebraFilterPipe = CerebraFilterPipe;
//# sourceMappingURL=cerebra-filter.pipe.js.map