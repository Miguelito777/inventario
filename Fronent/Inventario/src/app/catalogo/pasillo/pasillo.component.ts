import { Component, OnInit } from '@angular/core';
import { CatalogoService } from '../catalogo.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-pasillo',
  templateUrl: './pasillo.component.html',
  styleUrls: ['./pasillo.component.scss']
})
export class PasilloComponent implements OnInit {
  checkoutForm;
  constructor(
    private api:CatalogoService,
    private formBuilder: FormBuilder,
  ) { 
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  ngOnInit() {
    /*this.api.getEstados().subscribe(
      data=>{
      }
    )*/
  }
  onSubmit(form){
    console.log(form);
  }
}