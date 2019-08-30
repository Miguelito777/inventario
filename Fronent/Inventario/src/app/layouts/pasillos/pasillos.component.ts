import { Component, OnInit } from '@angular/core';
import { PasillosService } from './pasillos.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pasillos',
  templateUrl: './pasillos.component.html',
  styleUrls: ['./pasillos.component.scss']
})
export class PasillosComponent implements OnInit {
  Pasillos:any=[];
  pasillos: FormGroup;
  constructor(
    private api:PasillosService,
    private fb: FormBuilder
  ) { 

  }

  ngOnInit() {
    this.api.getAll().subscribe(
      data=>{
        this.pasillos = data;
      }
    );

    this.pasillos = this.fb.group({
      pasillos: ['', [Validators.required, Validators.minLength(2)]],
      id:[null]
    });
  }
  onSubmit(dataForm){
    if(dataForm.id == null){
      this.api.postOne(dataForm).subscribe(
        data=>{
          this.Pasillos.push(data);
          this.pasillos.controls.categoria.setValue('');
        }
      );
    }else{
      this.api.putOne(dataForm).subscribe(
        data=>{
          //this.Categorias.push(data);
          for(var i in this.Pasillos){
            if(this.Pasillos[i].id == data.id){
              this.Pasillos[i] = data;
            }
          }
          this.pasillos.controls.pasillos.setValue('');
          this.pasillos.controls.id.setValue(null);
        }
      );
    }
  }
  edit(item){
    this.pasillos.controls.pasillos.setValue(item.pasillos);
    this.pasillos.controls.id.setValue(item.id);
  }
  delete(id){
    let deleteItem = false;
    for(var i in this.Pasillos){
      if(this.Pasillos[i].id == id){
        this.Pasillos.splice(i,1);
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
