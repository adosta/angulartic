import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mi-panel1',
  templateUrl: './mi-panel1.component.html',
  styleUrls: ['./mi-panel1.component.css']
})
export class MiPanel1Component implements OnInit {

		public count;
		miValor:string;	
  constructor() { }

  ngOnInit() {
  	this.count=0;
  	this.miValor="";

  }

  lanzarAlerta(){
  	this.count++;
  }

  esInputValido(){

  	return this.miValor.length>=10;
  }

}
