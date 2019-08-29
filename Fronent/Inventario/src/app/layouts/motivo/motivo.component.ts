import { Component, OnInit } from '@angular/core';
import { MotivoService } from './motivo.service';

@Component({
  selector: 'app-motivo',
  templateUrl: './motivo.component.html',
  styleUrls: ['./motivo.component.scss']
})
export class MotivoComponent implements OnInit {
   Motivo:any=[];
  constructor(
    private api:MotivoService
  ) { 

  }

  ngOnInit() {
    this.api.getMotivo().subscribe(
      data=>{
        this.Motivo = data;
      }
    )
  }

}
