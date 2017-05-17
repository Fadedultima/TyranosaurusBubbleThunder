"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CerebraListComponent = (function () {
    function CerebraListComponent() {
        this.pageTitle = 'Cerebra List';
        this.cerebras = [
            {
                "cerebraName": "Learn to Play Guitar",
                "cerebraCreator": "Daniel",
                "cerebraDescription": "This will be a cerebra created to teach the fundamentals of learning guitar",
                "cerebraTasks": "Here is the first task",
                "cerebraTags": "learnGuitar",
                "cerebraLikes": 25
            },
            {
                "cerebraName": "Learn to cook Chicken",
                "cerebraCreator": "Quintyn",
                "cerebraDescription": "This will be a cerebra created to teach you the basics in cuisine regarding chicken breasts",
                "cerebraTasks": "Here is the first task",
                "cerebraTags": "cookChicken",
                "cerebraLikes": 35
            }
        ];
    }
    CerebraListComponent.prototype.ngOnInit = function () {
    };
    return CerebraListComponent;
}());
CerebraListComponent = __decorate([
    core_1.Component({
        selector: 'pm-cerebrums',
        moduleId: module.id,
        templateUrl: 'cerebra-list.component.html',
        styleUrls: ['cerebra-list.component.css']
    })
], CerebraListComponent);
exports.CerebraListComponent = CerebraListComponent;
//# sourceMappingURL=cerebra-list.component.js.map