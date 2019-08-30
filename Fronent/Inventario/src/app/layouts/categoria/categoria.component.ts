import { Component, OnInit } from '@angular/core';
import { CategoriaService } from './categoria.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {
  Categorias:any=[];
  categoria: FormGroup;
  
  constructor(
    private api:CategoriaService,
    private fb: FormBuilder
  ) { 

  }

  ngOnInit() {
    this.api.getAll().subscribe(
      data=>{
        this.Categorias = data;
      }
    );

    this.categoria = this.fb.group({
      categoria: ['', [Validators.required, Validators.minLength(2)]],
      id:[null]
    });
  }
  onSubmit(dataForm){
    if(dataForm.id == null){
      this.api.postOne(dataForm).subscribe(
        data=>{
          this.Categorias.push(data);
          this.categoria.controls.categoria.setValue('');
        }
      );
    }else{
      this.api.putOne(dataForm).subscribe(
        data=>{
          //this.Categorias.push(data);
          for(var i in this.Categorias){
            if(this.Categorias[i].id == data.id){
              this.Categorias[i] = data;
            }
          }
          this.categoria.controls.categoria.setValue('');
          this.categoria.controls.id.setValue(null);
        }
      );
    }
  }
  edit(item){
    this.categoria.controls.categoria.setValue(item.categoria);
    this.categoria.controls.id.setValue(item.id);
  }
  delete(id){
    let deleteItem = false;
    for(var i in this.Categorias){
      if(this.Categorias[i].id == id){
        this.Categorias.splice(i,1);
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
