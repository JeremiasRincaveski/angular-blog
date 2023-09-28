import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  imgsrc:string = "./assets/carros.jpg";
  titulo:string = "Carros";
  descricao:string = "Carros de todos os tipos";

  constructor() { }

  ngOnInit(): void {
  }

}
