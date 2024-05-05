//Main
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

//Hijos
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

//Nietos y Bis-Nietos
import { IniciarComponent } from './login/iniciar/iniciar.component';
import { ProductosComponent } from './home/productos/productos.component'
import { CrearProductoComponent } from './home/productos/crear-producto/crear-producto.component';
import { TablaProductosComponent } from './home/productos/tabla-productos/tabla-productos.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,

    IniciarComponent,
    ProductosComponent,
    CrearProductoComponent,
    TablaProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
