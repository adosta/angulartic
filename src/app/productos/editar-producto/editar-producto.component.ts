import { Component, OnInit } from '@angular/core';
//Dar soporte para recibir datos por URL
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {ProductosService} from '../productos.service'
import {Producto} from '../producto'

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {

  productos:Producto[];
  producto: Producto= new Producto();

  constructor( 
  	private route: ActivatedRoute,
  	private router: Router,
    private _productoService:ProductosService

  ) {}

  ngOnInit() {
  	this.route.params
.subscribe((Params:Params)=>{
   this._productoService.editarProducto(Params['id']).subscribe(
      (data:Producto[])=>{
        this.producto = data;
        console.log(JSON.stringify(this.producto));
      },
      (error)=>{},
      );

    })
  }
  EditarProducto(){
    this._productoService.editar(this.producto).subscribe(
      (data)=>{        
        if(data=!null) {
               
          console.log(JSON.stringify(this.producto));
          alert('Editado correctamente')
               
        }
        this.router.navigate(['listaProductos']);// redireccionar
      },//cierre de producto
      (error)=>{}
    );//cierre del subscribe

  }//cierre EditarProducto

}
