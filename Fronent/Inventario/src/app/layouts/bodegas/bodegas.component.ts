import { Component, OnInit } from '@angular/core';
import { BodegasService } from './bodegas.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bodegas',
  templateUrl: './bodegas.component.html',
  styleUrls: ['./bodegas.component.scss']
})

export class BodegasComponent implements OnInit {
  items:any=[];
  item: FormGroup;
  constructor(
    private api:BodegasService,
    private fb: FormBuilder
  ) { 

  }

  ngOnInit() {
    this.api.getAll().subscribe(
      data=>{
        this.items = data;
      }
    );

    this.item = this.fb.group({
      bodega: ['', [Validators.required, Validators.minLength(2)]],
      direccion: ['', [Validators.required, Validators.minLength(2)]],
      id:[null]
    });
  }
  onSubmit(dataForm){
    if(dataForm.id == null){
      this.api.postOne(dataForm).subscribe(
        data=>{
          this.items.push(data);
          this.item.controls.bodega.setValue('');
          this.item.controls.direccion.setValue('');
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
          this.item.controls.bodega.setValue('');
          this.item.controls.direccion.setValue('');
          this.item.controls.id.setValue(null);
        }
      );
    }
  }
  edit(item){
    this.item.controls.bodega.setValue(item.bodega);
    this.item.controls.direccion.setValue(item.direccion);
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