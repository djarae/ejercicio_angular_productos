import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';

import { BrowserModule } from '@angular/platform-browser';
import { IniciarComponent } from './iniciar/iniciar.component';

@NgModule({
  declarations: [
    LoginComponent,
    IniciarComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],

})
export class LoginModule { }
