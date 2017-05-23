import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICerebra } from './cerebra';
import { CerebraService } from './cerebra.service';

@Component ({
    templateUrl: 'app/cerebras/cerebra-detail.component.html'
})
 
export class CerebraDetailComponent implements OnInit{
    pageTitle: string='Cerebra Detail';
    errorMessage: string='';
    cerebra: ICerebra;
    
    constructor(private _route: ActivatedRoute, private _router: Router, private _cerebraService: CerebraService) {
        
    }
    
    ngOnInit(): void {
        let id = +this._route.snapshot.params['id'];
        this.pageTitle += `: ${id}`;
        
        this.getCerebra(id);
    }
    
//    ngOnInit(): void {
//        this.sub = this._route.params.subscribe(
//            params => {
//                let id = +params['id'];
//                this.getCerebra(id);
//        });
//    }
//    
    getCerebra(id: number) {
        this._cerebraService.getCerebra(id).subscribe(
            cerebra => this.cerebra = cerebra,
            error => this.errorMessage = <any>error);
    }
    
    onBack(): void {
        this._router.navigate(['/home']);
    }
    
}