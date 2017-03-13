import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosRoutingModule } from './productos-routing.module';
import { ProductosComponent } from './productos.component';
import { ProductosService } from './productos.service';
import { FormaProductosComponent } from './forma-productos/forma-productos.component';
import { FormsModule } from '@angular/forms';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';

@NgModule({
  imports: [
    CommonModule,
    ProductosRoutingModule,
    FormsModule
  ],
  declarations: [ProductosComponent, FormaProductosComponent, EditarProductoComponent],
  providers:[ProductosService]
})
export class ProductosModule { }
