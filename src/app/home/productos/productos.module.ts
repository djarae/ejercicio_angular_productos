import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosComponent } from './productos.component';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import { TablaProductosComponent } from './tabla-productos/tabla-productos.component';



@NgModule({
  declarations: [
    ProductosComponent,
    CrearProductoComponent,
    TablaProductosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductosModule { }
