import { Component, OnInit } from '@angular/core';
import { BodegasService } from './bodegas.service';

@Component({
  selector: 'app-bodegas',
  templateUrl: './bodegas.component.html',
  styleUrls: ['./bodegas.component.scss']
})

export class BodegasComponent implements OnInit {
  Bodegas:any=[];
  constructor(
    private api:BodegasService
  ) { 

  }

  ngOnInit() {
    this.api.getBodegas().subscribe(
      data=>{
        this.Bodegas = data;
      }
    )
  }

}