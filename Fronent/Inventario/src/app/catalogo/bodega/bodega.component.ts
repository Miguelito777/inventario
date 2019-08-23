import { Component, OnInit } from '@angular/core';
import { CatalogoService } from '../catalogo.service';

@Component({
  selector: 'app-bodega',
  templateUrl: './bodega.component.html',
  styleUrls: ['./bodega.component.scss']
})
export class BodegaComponent implements OnInit {

  constructor(
    private api : CatalogoService
  ) { }

  ngOnInit() {
    console.log("consumir api");
    
    this.api.getEstados().subscribe(
      data=>{
        console.log(data);
      }
    )
  }

}
