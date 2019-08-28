import { Component, OnInit } from '@angular/core';
import { CategoriaService } from './categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {
  Categorias:any=[];
  constructor(
    private api:CategoriaService
  ) { 

  }

  ngOnInit() {
    this.api.getCategorias().subscribe(
      data=>{
        this.Categorias = data;
      }
    )
  }

}
