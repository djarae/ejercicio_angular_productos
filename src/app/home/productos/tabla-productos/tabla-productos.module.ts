import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActualizarProductoComponent } from './actualizar-producto/actualizar-producto.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { EliminarProductoComponent } from './eliminar-producto/eliminar-producto.component';



@NgModule({
  declarations: [
    ActualizarProductoComponent,
    DetalleProductoComponent,
    EliminarProductoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TablaProductosModule { }
