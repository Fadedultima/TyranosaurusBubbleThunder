import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `
        <div>
            <nav class='navbar navbar-default'>
                <div class='container-fluid'>
                    <a class='navbar-brand'>{{pageTitle}}</a>
                    <ul class='nav navbar-nav'>
                        <li><a><span class="glyphicon glyphicon-home"></span> Home</a></li>
                        <li><a><span class="glyphicon glyphicon-user"></span> Profile</a></li>
                        <li><a><span class="glyphicon glyphicon-plus"></span> Create</a></li>
                        <li><a>Login/Register</a><li>
                    </ul>
                </div>
            </nav>
        </div>
        <pm-cerebrums></pm-cerebrums>
    `
})
export class AppComponent { 
    pageTitle: string = `LearnIt Logo`;
}
