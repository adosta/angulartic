import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductosComponent} from './productos.component'
import {FormaProductosComponent} from './forma-productos/forma-productos.component'
import { EditarProductoComponent } from './editar-producto/editar-producto.component';

const routes: Routes = [
  {path:'listaProductos',component:ProductosComponent},
  {path:'createProducto', component: FormaProductosComponent},
  {path:'editarProducto', component: EditarProductoComponent},
  {path:'editarProducto/:id', component: EditarProductoComponent},
  {path:'eliminarProducto/:id',component:ProductosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ProductosRoutingModule { }
