import { Component, OnInit } from '@angular/core';
import { CatalogoService } from '../catalogo.service';

@Component({
  selector: 'app-pasillo',
  templateUrl: './pasillo.component.html',
  styleUrls: ['./pasillo.component.scss']
})
export class PasilloComponent implements OnInit {

  constructor(
    private api:CatalogoService
  ) { }

  ngOnInit() {
    this.api.getEstados().subscribe(
      data=>{
        console.log(data);
      }
    )
  }

}
