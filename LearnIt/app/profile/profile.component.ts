import { Component, OnInit } from '@angular/core';

@Component ({
    moduleId: module.id,
    templateUrl: 'profile.component.html',
    styleUrls: ['profile.component.css']
})

export class ProfileComponent implements OnInit{
    pageTitle: string = 'Profile Page';
    
    constructor(){
        
    }
    
    ngOnInit(): void{
        
    }
}