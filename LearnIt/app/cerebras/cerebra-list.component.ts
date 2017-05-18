import { Component, OnInit } from '@angular/core';
import { ICerebra } from './cerebra';
import { CerebraService } from './cerebra.service';

@Component ({
    moduleId: module.id,
    templateUrl: 'cerebra-list.component.html',
    styleUrls: ['cerebra-list.component.css']
})
 
export class CerebraListComponent implements OnInit{
    pageTitle: string = 'Cerebra List';
    listFilter: string;
    errorMessage: string;
    cerebras: ICerebra[];
    
    constructor(private _cerebraService: CerebraService){
        
    }
    
    ngOnInit(): void{
        this._cerebraService.getCerebras().subscribe(cerebras => this.cerebras = cerebras, error => this.errorMessage = <any>error);
    }
}