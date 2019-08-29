import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasillosService } from './pasillos.service';
import { BodegasService } from '../bodegas/bodegas.service';

@Component({
  selector: 'app-pasillos',
  templateUrl: './pasillos.component.html',
  styleUrls: ['./pasillos.component.scss']
})
export class PasillosComponent implements OnInit {
  items:any=[];
  item: FormGroup;
  items_two:any=[];
  constructor(
    private api:PasillosService,
    private api_two:BodegasService,
    private fb: FormBuilder
  ) { 

  }

  ngOnInit() {
    this.api.getAll().subscribe(
      data=>{
        this.items = data;
      }
    );
    this.api_two.getAll().subscribe(
      data=>{
        this.items_two = data;
      }
    );
    this.item = this.fb.group({
      pasillo: ['', [Validators.required, Validators.minLength(2)]],
      idbodega: ['', [Validators.required, Validators.minLength(2)]],
      id:[null]
    });
  }
  onSubmit(dataForm){
    if(dataForm.id == null){
      this.api.postOne(dataForm).subscribe(
        data=>{
          this.items.push(data);
          this.item.controls.codigo.setValue('');
          this.item.controls.idbodega.setValue('');
        }
      );
    }else{
      this.api.putOne(dataForm).subscribe(
        data=>{
          //this.Categorias.push(data);
          for(var i in this.items){
            if(this.items[i].id == data.id){
              this.items[i] = data;
            }
          }
          this.item.controls.codigo.setValue('');
          this.item.controls.idbodega.setValue('');
          this.item.controls.id.setValue(null);
        }
      );
    }
  }
  edit(item){
    this.item.controls.codigo.setValue(item.codigo);
    this.item.controls.idbodega.setValue(item.idbodega);
    this.item.controls.id.setValue(item.id);
  }
  delete(id){
    let deleteItem = false;
    for(var i in this.items){
      if(this.items[i].id == id){
        this.items.splice(i,1);
        deleteItem = true;
      }
    }
    if(deleteItem){
      this.api.deleteOne(id).subscribe(
        data=>{
          console.log(data);
        }
      );
    }
  } 
}
