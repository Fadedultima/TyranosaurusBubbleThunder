import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

@Injectable()
export class CerebraDetailGuard implements CanActivate {
    
    constructor(private _router: Router){
        
    }
    
    canActivate(route: ActivatedRouteSnapshot): boolean {
        let id = +route.url[1].path;
        if (isNaN(id) || id < 1){
            alert('Invalid product Id');
            this._router.navigate(['/home']);
            return false;
        };
        return true;
    }
}