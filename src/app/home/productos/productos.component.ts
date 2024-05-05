import { Component, Inject } from '@angular/core';
import { CrearProductoComponent  } from './crear-producto/crear-producto.component'
 
export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

}
