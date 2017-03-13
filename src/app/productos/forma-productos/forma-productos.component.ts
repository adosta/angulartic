import { Component, OnInit } from '@angular/core';
import {Producto} from '../producto'
import {ProductosService} from '../productos.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-forma-productos',
  templateUrl: './forma-productos.component.html',
  styleUrls: ['./forma-productos.component.css']
})
export class FormaProductosComponent implements OnInit {

	nuevoProducto:Producto = new Producto();
  	constructor(
  		private _ProductoService:ProductosService,
  		private _router:Router) {}

  ngOnInit() {
  }

  guardarProducto(){
  	this._ProductoService.addProducto(this.nuevoProducto).subscribe(
  		(data:any)=>{
  			this._router.navigate(['listaProductos']);
  		},
  		(err)=>{}
  		)
  }

  /*modificarProducto(){
    this._ProductoService.editar(this.)
  }*/

  	imprimirNuevoProducto(){
  		console.log(JSON.stringify(this.nuevoProducto))
  	}
}
