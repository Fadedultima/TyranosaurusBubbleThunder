import { Component, OnInit } from '@angular/core';
import { ICerebra } from './cerebra';
import { CerebraService } from './cerebra.service';

@Component ({
    moduleId: module.id,
    templateUrl: 'create-cerebra.component.html',
    styleUrls: ['create-cerebra.component.css']
})

export class CreateCerebraComponent implements OnInit{
    pageTitle: string = 'Create Cerebra';
    
    constructor(){
        
    }
    
    ngOnInit(): void{
        
    }
}