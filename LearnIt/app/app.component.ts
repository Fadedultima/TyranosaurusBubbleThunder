import { Component } from '@angular/core';

import { CerebraService } from './cerebras/cerebra.service';

@Component({
    selector: 'cl-app',
    template: `
        <div>
            <nav class='navbar navbar-default'>
                <div class='container-fluid'>
                    <a class='navbar-brand'>{{pageTitle}}</a>
                    <ul class='nav navbar-nav'>
                        <li><a [routerLink]="['/home']"><span class="glyphicon glyphicon-home"></span> Home</a></li>
                        <li><a><span class="glyphicon glyphicon-user"></span> Profile</a></li>
                        <li><a><span class="glyphicon glyphicon-plus"></span> Create Cerebra</a></li>
                        <li><a>Login/Register</a><li>
                    </ul>
                </div>
            </nav>
            <div class="container">
                <router-outlet></router-outlet>
            </div>
        </div>
        
    `,
    providers: [ CerebraService ]
})
export class AppComponent { 
    pageTitle: string = `LearnIt Logo`;
}
