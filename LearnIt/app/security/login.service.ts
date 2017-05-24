import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import * as firebase from 'firebase';

@Injectable()
export class UserService implements CanActivate {
    userLoggedIn: boolean = false;
    
    constructor( private router: Router){
        firebase.initializeApp({
            apiKey: "AIzaSyC27jCPIG57MxRG2w8h8aSdSXPOUUXXnHM",
            authDomain: "learnit-6c416.firebaseapp.com",
            databaseURL: "https://learnit-6c416.firebaseio.com",
            projectId: "learnit-6c416",
            storageBucket: "learnit-6c416.appspot.com",
            messagingSenderId: "911343383900"
        })
        
    }
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let url: string = state.url;
        return this.verifyLogin(url);
    }
    
    verifyLogin(url: string): boolean {
        if(this.userLoggedIn){
            return true;
        }
        
        this.router.navigate(['/login']);
        return false;
    }
}