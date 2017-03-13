import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mipanel2',
  templateUrl: './mipanel2.component.html',
  styleUrls: ['./mipanel2.component.css']
})
export class Mipanel2Component implements OnInit {
 
 listNombres=['Juan','Luis','Maria','Soto'];
 listApellidos=['Martinez','Perez','Gomez','Torres'];
  constructor() { }

  ngOnInit() {
  }

}
