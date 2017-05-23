"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var cerebra_list_component_1 = require("./cerebras/cerebra-list.component");
var cerebra_detail_component_1 = require("./cerebras/cerebra-detail.component");
var create_cerebra_component_1 = require("./cerebras/create-cerebra.component");
var profile_component_1 = require("./profile/profile.component");
var cerebra_filter_pipe_1 = require("./cerebras/cerebra-filter.pipe");
var cerebra_guard_service_1 = require("./cerebras/cerebra-guard.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            forms_1.FormsModule,
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            router_1.RouterModule.forRoot([
                { path: 'home', component: cerebra_list_component_1.CerebraListComponent },
                { path: 'cerebra/:id', canActivate: [cerebra_guard_service_1.CerebraDetailGuard], component: cerebra_detail_component_1.CerebraDetailComponent },
                { path: 'create', component: create_cerebra_component_1.CreateCerebraComponent },
                { path: 'profile', component: profile_component_1.ProfileComponent },
                { path: '', redirectTo: 'home', pathMatch: 'full' },
                { path: '**', redirectTo: 'home', pathMatch: 'full' }
            ])
        ],
        declarations: [app_component_1.AppComponent, cerebra_list_component_1.CerebraListComponent, cerebra_filter_pipe_1.CerebraFilterPipe, cerebra_detail_component_1.CerebraDetailComponent, create_cerebra_component_1.CreateCerebraComponent, profile_component_1.ProfileComponent],
        providers: [cerebra_guard_service_1.CerebraDetailGuard],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map