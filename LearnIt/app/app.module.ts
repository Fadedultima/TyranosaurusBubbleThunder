import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { CerebraListComponent } from './cerebras/cerebra-list.component';
import { CerebraDetailComponent } from './cerebras/cerebra-detail.component';
import { CreateCerebraComponent } from './cerebras/create-cerebra.component';
import { LoginComponent } from './security/login.component';
import { ProfileComponent } from './profile/profile.component';
import { CerebraFilterPipe } from './cerebras/cerebra-filter.pipe';
import { CerebraDetailGuard} from './cerebras/cerebra-guard.service';

@NgModule({
  imports: [ 
      FormsModule, 
      BrowserModule,
      HttpModule,
      RouterModule.forRoot([
          {path: 'home', component: CerebraListComponent},
          {path: 'cerebra/:id', canActivate: [ CerebraDetailGuard ], component: CerebraDetailComponent},
          {path: 'create', component: CreateCerebraComponent},
          {path: 'profile', component: ProfileComponent},
          {path: 'login', component: LoginComponent},
          {path: '', redirectTo: 'home', pathMatch: 'full'},
          {path: '**', redirectTo: 'home', pathMatch: 'full'}
    
    ]) 
  ],
  declarations: [ AppComponent, CerebraListComponent, CerebraFilterPipe, CerebraDetailComponent, CreateCerebraComponent, ProfileComponent, LoginComponent ],
  providers: [ CerebraDetailGuard ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
