import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductosService } from './productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  Productos:any=[];
  productos: FormGroup;
  
  constructor(
    private api:ProductosService,
    private fb: FormBuilder
  ) { 

  }

  ngOnInit() {
    this.api.getAll().subscribe(
      data=>{
        this.Productos = data;
      }
    );

    this.productos = this.fb.group({
      idcat: ['', [Validators.required, Validators.minLength(1)]],
      cantidad: ['', [Validators.required, Validators.minLength(1)]],
      description: ['', [Validators.required, Validators.minLength(1)]],
      nombre: ['', [Validators.required, Validators.minLength(1)]],
      codigo: ['', [Validators.required, Validators.minLength(1)]],
      id:[null]
    });
  }
  onSubmit(dataForm){
    if(dataForm.id == null){
      this.api.postOne(dataForm).subscribe(
        data=>{
          this.Productos.push(data);
          this.productos.controls.codigo.setValue('');
          this.productos.controls.nombre.setValue('');
          this.productos.controls.description.setValue('');
          this.productos.controls.cantidad.setValue('');
          this.productos.controls.idcat.setValue('');
        }
      );
    }else{
      this.api.putOne(dataForm).subscribe(
        data=>{
          //this.Categorias.push(data);
          for(var i in this.Productos){
            if(this.Productos[i].id == data.id){
              this.Productos[i] = data;
            }
          }
          this.productos.controls.productos.setValue('');
          this.productos.controls.id.setValue(null);
        }
      );
    }
  }
  edit(item){
    this.productos.controls.productos.setValue(item.idcat);
    this.productos.controls.productos.setValue(item.cantidad);
    this.productos.controls.productos.setValue(item.description); 
    this.productos.controls.productos.setValue(item.nombre);
    this.productos.controls.productos.setValue(item.codigo);
    this.productos.controls.id.setValue(item.id);
  }
  delete(id){
    let deleteItem = false;
    for(var i in this.Productos){
      if(this.Productos[i].id == id){
        this.Productos.splice(i,1);
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
