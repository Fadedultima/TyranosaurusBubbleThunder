import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICerebra } from './cerebra';

@Component ({
    templateUrl: 'app/cerebras/cerebra-detail.component.html'
})
 
export class CerebraDetailComponent implements OnInit{
    pageTitle: string='Cerebra Detail';
    cerebra: ICerebra;
    
    constructor(private _route: ActivatedRoute, private _router: Router) {
        
    }
    
    ngOnInit(): void {
        let id = +this._route.snapshot.params['id'];
        this.pageTitle += `: ${id}`;
    }
    
    onBack(): void {
        this._router.navigate(['/home']);
    }
    
}