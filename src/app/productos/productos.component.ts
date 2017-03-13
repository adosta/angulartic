import { Component, OnInit } from '@angular/core';
import { Producto } from './producto'
import {ProductosService} from './productos.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
	productos:Producto[];
  constructor(
    private _productosService:ProductosService,
    private _router:Router
    ) { }

  ngOnInit() {
  	this._productosService.getProductos()
  	.subscribe(
  		data=>{
  			this.productos = data;
  			console.log("Los dos recibidos fueron"+JSON.stringify(data));
  		},
  		err=>{},
  		/*(cualquierCosa:Producto[])=>{
  			console.log(cualquierCosa);
  		}*/
	);
  }

  eraseProducto(id){
    this._productosService.eliminarProducto(id).subscribe(
      (data:any)=>{
        var articulo = this.productos.filter(art=>art._id==id)[0];
        this.productos.splice(this.productos.indexOf(id), 1);
            },
      (err)=>{}
      )
  }

}
