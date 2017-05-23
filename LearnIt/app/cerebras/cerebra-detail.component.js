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
var cerebra_service_1 = require("./cerebra.service");
var CerebraDetailComponent = (function () {
    function CerebraDetailComponent(_route, _router, _cerebraService) {
        this._route = _route;
        this._router = _router;
        this._cerebraService = _cerebraService;
        this.pageTitle = 'Cerebra Detail';
        this.errorMessage = '';
    }
    CerebraDetailComponent.prototype.ngOnInit = function () {
        var id = +this._route.snapshot.params['id'];
        this.pageTitle += ": " + id;
        this.getCerebra(id);
    };
    //    ngOnInit(): void {
    //        this.sub = this._route.params.subscribe(
    //            params => {
    //                let id = +params['id'];
    //                this.getCerebra(id);
    //        });
    //    }
    //    
    CerebraDetailComponent.prototype.getCerebra = function (id) {
        var _this = this;
        this._cerebraService.getCerebra(id).subscribe(function (cerebra) { return _this.cerebra = cerebra; }, function (error) { return _this.errorMessage = error; });
    };
    CerebraDetailComponent.prototype.onBack = function () {
        this._router.navigate(['/home']);
    };
    return CerebraDetailComponent;
}());
CerebraDetailComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/cerebras/cerebra-detail.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, cerebra_service_1.CerebraService])
], CerebraDetailComponent);
exports.CerebraDetailComponent = CerebraDetailComponent;
//# sourceMappingURL=cerebra-detail.component.js.map