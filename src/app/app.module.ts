//Main
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Hijos
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

//Nietos y Bis-Nietos
import { IniciarComponent } from './login/iniciar/iniciar.component';
import { ProductosComponent } from './home/productos/productos.component'



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,

    IniciarComponent,
    ProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
