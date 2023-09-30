import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  imgsrc:string = "";
  titulo:string = "";
  descricao:string = "";
  private id:string | null = ""

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    })

    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id:string | null) {
    const result = dataFake.find(item => item.id === id);
    
    if(result) {
      this.imgsrc = result.imgsrc;
      this.titulo = result.titulo;
      this.descricao = result.descricao;
    }
  }

}