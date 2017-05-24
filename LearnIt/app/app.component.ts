import { Component, NgZone } from '@angular/core';

import { CerebraService } from './cerebras/cerebra.service';

import * as firebase from 'firebase';

const unsubscribe = firebase.auth().onAuthStateChanged((user:any) => {
	this.zone.run( () => {
		if (!user) {
		  this.rootPage = 'login';
		  unsubscribe();
		} else { 
		  this.rootPage = 'home';
		  unsubscribe();
		}
	});     
});

@Component({
    selector: 'cl-app',
    template: `
        <div>
            <nav class='navbar navbar-default'>
                <div class='container-fluid'>
                    <a class='navbar-brand'>{{pageTitle}}</a>
                    <ul class='nav navbar-nav'>
                        <li><a [routerLink]="['/home']"><span class="glyphicon glyphicon-home"></span> Home</a></li>
                        <li><a [routerLink]="['/profile']"><span class="glyphicon glyphicon-user"></span> Profile</a></li>
                        <li><a [routerLink]="['/create']"><span class="glyphicon glyphicon-plus"></span> Create Cerebra</a></li>
                        <li><a [routerLink]="['/login']">Login/Register</a><li>
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
    pageTitle: string = `Cerebrum Logo`;
	rootPage: any;
	zone: NgZone;
	
	constructor(){
		this.zone = new NgZone({});
	}
	
	
}
