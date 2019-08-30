import { Component, OnInit } from '@angular/core';
import { MotivoService } from './motivo.service';
import { FormBuilder,  FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-motivo',
  templateUrl: './motivo.component.html',
  styleUrls: ['./motivo.component.scss']
})
export class MotivoComponent implements OnInit {
   Motivo:any=[];
   motivo: FormGroup;

  constructor(
    private api:MotivoService, 
    private fb:FormBuilder
  ) { 

  }

  ngOnInit() {
    this.api.getMotivo().subscribe(
      data=>{
        this.Motivo = data;
        
      }
    );
    this.motivo = this.fb.group({
      observaciones: ['', [Validators.required, Validators.minLength(2)]],
      motivo: ['', [Validators.required, Validators.minLength(2)]],
      id:[null]
    });
  }
  onSubmit(dataForm){
    if(dataForm.id == null){
      this.api.postOne(dataForm).subscribe(
        data=>{
          this.Motivo.push(data);
          this.motivo.controls.motivo.setValue('');
        }
      );
    }else{
      this.api.putOne(dataForm).subscribe(
        data=>{
          //this.Motivo.push(data);
          for(var i in this.Motivo){
            if(this.Motivo[i].id == data.id){
              this.Motivo[i] = data;
            }
          }
          this.motivo.controls.motivo.setValue('');
          this.motivo.controls.id.setValue(null);
        }
      );
    }
  }
  edit(item){
   
    this.motivo.controls.observaciones.setValue(item.observaciones);
    this.motivo.controls.motivo.setValue(item.motivo);
    this.motivo.controls.id.setValue(item.id);
  }
  delete(id){
    let deleteItem = false;
    for(var i in this.Motivo){
      if(this.Motivo[i].id == id){
        this.Motivo.splice(i,1);
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


 