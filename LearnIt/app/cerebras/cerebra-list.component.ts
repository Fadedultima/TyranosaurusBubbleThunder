import { Component, OnInit } from '@angular/core';
import { ICerebra } from './cerebra';

@Component ({
    selector: 'pm-cerebrums',
    moduleId: module.id,
    templateUrl: 'cerebra-list.component.html',
    styleUrls: ['cerebra-list.component.css']
})

export class CerebraListComponent implements OnInit{
    pageTitle: string = 'Cerebra List';
    cerebraFilter: string;
    errorMessage: string;
    cerebras: ICerebra[] = [
        {
            "cerebraName": "Learn to Play Guitar",
            "cerebraCreator": "Daniel",
            "cerebraDescription": "This will be a cerebra created to teach the fundamentals of learning guitar",
            "cerebraTasks": "Here is the first task",
            "cerebraTags": "learnGuitar",
            "cerebraLikes": 25
        },
        {
            "cerebraName": "Learn to cook Chicken",
            "cerebraCreator": "Quintyn",
            "cerebraDescription": "This will be a cerebra created to teach you the basics in cuisine regarding chicken breasts",
            "cerebraTasks": "Here is the first task",
            "cerebraTags": "cookChicken",
            "cerebraLikes": 35
        }
    ];
    
    ngOnInit(): void{
        
    }
}