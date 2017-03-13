import { Injectable } from '@angular/core';
import {Headers, RequestOptions, Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductosService {

  constructor(private _http: Http) { }

	//private apiURL:string = 'producto/';
	private domain:string = 'http://localhost:55994/producto/'

	getProductos(){
		return this._http
		.get(this.domain+'Index')
		.map(res=>res.json())
	}

	addProducto(producto){
		return this._http
		.post(this.domain+'createProducto',producto)
		.map(res=>res.json())
	}

	public editarProducto(id){
    return this._http
    .get(this.domain+'editarProducto/'+id,null)
    .map(res=>res.json())
    

  }
  public editar(producto){
    return this._http
    .post(this.domain+'editar',producto)
    .map(res=>res.json())
    

  }
	
	eliminarProducto(id){
		return this._http
		.post(this.domain+'eliminarProducto/'+id,null)
		.map(res=>res.json())
	}

}
