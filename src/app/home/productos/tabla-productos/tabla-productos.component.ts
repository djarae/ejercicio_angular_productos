import { Component, Inject } from '@angular/core';
import axios from 'axios';

// import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';



@Component({
  selector: 'app-tabla-productos',
  templateUrl: './tabla-productos.component.html',
  styleUrls: ['./tabla-productos.component.css']
})




export class TablaProductosComponent {

  arr=[{id:"0",nombre:"section1",stock:"0"}];

  async  ngOnInit(): Promise<void> {
    let hookFiltroNProducto:string="Kirby";
    let hookFiltroSProducto:number=20;
    localStorage.setItem("paginacion","1");
  const response = await axios.get(
    "http://127.0.0.1:8000/getListadoProductos?nombreProd='"+hookFiltroNProducto+"'&stockProd='"+hookFiltroSProducto+"'"+"&paginacion='"+localStorage.getItem("paginacion")+"'",{withCredentials: true }
  )
  let ListadoProductosFiltrado: (string | number)[] =[];
  for (let i=0;(i<response.data.datax.length);i++){
          ListadoProductosFiltrado.push(response.data.datax[i]);
          this.arr.push(response.data.datax[i]);
    }

    console.log(ListadoProductosFiltrado)
  }

  



}
