import {Component} from '@angular/core';
import axios from "axios";
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent {

  nombre='a';
  detalle='b';
  stock=0;

  async crearProducto() { 
    let id = 51;
    alert("Button is clicked");
    let values
    await axios.post("http://127.0.0.1:8000/insertarProducto?id='"+id+"'&nombre='"+this.nombre+"'&detalle='"+this.detalle+"'&stock='"+this.stock+"'",{withCredentials: true })
    .then(function (response) {
        values = response.data
        alert( "Producto insertado correctamente en la base de datos.")
    })
    .catch(function () {
        // handle error
        console.log("no funciona!");
    })
    

 }


}
