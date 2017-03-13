import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import {ProductosModule} from './productos/productos.module'

import { AppComponent } from './app.component';

import { Mipanel2Component } from './mipanel2/mipanel2.component';
import { MiPanel1Component } from './mi-panel1/mi-panel1.component';
import { MiPanel3Component } from './mi-panel3/mi-panel3.component';
import { EjercicioBasicoComponent } from './ejercicio-basico/ejercicio-basico.component';

var routes: Routes = [
  {path:'ejercicioBasico',component:EjercicioBasicoComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MiPanel1Component,
    Mipanel2Component,
    MiPanel3Component,
    EjercicioBasicoComponent
  ],
  imports:[
    ProductosModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
