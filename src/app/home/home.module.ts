import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

//Hijos
import { ProductosComponent } from './productos/productos.component'

//Nietos y Bisnietos

@NgModule({
  declarations: [
    HomeComponent,
    ProductosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
