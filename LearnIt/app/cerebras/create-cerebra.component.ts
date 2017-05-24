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
    cerebra: ICerebra;
    
    constructor(private _cerebraService: CerebraService){
        
    }
    
    ngOnInit(): void{
        
    }
    
    createNewCerebra(){
        console.log( "Cerebra Name: " + this.cerebra.cerebraName);
        
    }
    
    getNewCerebra(){
        
    }
}


//creator
//description
//array of tasks
//lists node
//generate random id
//favorite value is set to 0
//timestamp set to current time
//console.log( "Cerebra Description: " + this.cerebraDescription);
//        console.log( "Cerebra Tasks: " + this.cerebraTasks);
//        console.log( "Cerebra Tags: " + this.cerebraTags);

