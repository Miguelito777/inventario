import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ReplaySubject, Subject } from 'rxjs';
import { MatSelect } from '@angular/material';
import { takeUntil, take } from 'rxjs/operators';
import { MovimientosService } from './movimientos.service';
import { ProductosService } from '../productos/productos.service';
import { EstanteriasService } from '../estanterias/estanterias.service';
import { TipomovService } from '../tipomov/tipomov.service';

interface Productos{
  nombre:String
}


interface Estanterias{
  codigo:String
}

interface TipoMov{
  tipomov:String
}

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.component.html',
  styleUrls: ['./movimientos.component.scss']
})
export class MovimientosComponent implements OnInit {

  items:any=[];
  item: FormGroup;

  protected banks: Productos[] = [];
  protected banks1: Estanterias[] = [];
  protected banks2: TipoMov[] = [];

    /** control for the selected bank */
    public bankCtrl: FormControl = new FormControl();
    public bankCtrl1: FormControl = new FormControl();
    public bankCtrl2: FormControl = new FormControl();
    /** control for the MatSelect filter keyword */
    public bankFilterCtrl: FormControl = new FormControl();
    public bankFilterCtrl1: FormControl = new FormControl();
    public bankFilterCtrl2: FormControl = new FormControl();
    /** list of banks filtered by search keyword */
    public filteredBanks: ReplaySubject<Productos[]> = new ReplaySubject<Productos[]>(1);
    public filteredBanks1: ReplaySubject<Estanterias[]> = new ReplaySubject<Estanterias[]>(1);
    public filteredBanks2: ReplaySubject<TipoMov[]> = new ReplaySubject<TipoMov[]>(1);
  
    //@ViewChild('singleSelectTo') singleSelectTo: MatSelect;
  
    /** Subject that emits when the component has been destroyed. */
    protected _onDestroy = new Subject<void>();
  


  constructor(
    private api:MovimientosService,
    private api_two:ProductosService,
    private api_tree:EstanteriasService,
    private api_four:TipomovService,

    private fb: FormBuilder,
    private fb1: FormBuilder,
    private fb2: FormBuilder,
    private fb3: FormBuilder
  ) { 

  }

  ngOnInit() {
    this.api.getAll().subscribe(
      data=>{
        this.items = data;
      }
    );
//dos
    this.api_two.getAll().subscribe(
      data=>{
        //console.log(data);
        
        this.banks = data;

        // set initial selection
        this.bankCtrl.setValue(this.banks);

        // load the initial bank list
        this.filteredBanks.next(this.banks.slice());

        // listen for search field value changes
        this.bankFilterCtrl.valueChanges
          .pipe(takeUntil(this._onDestroy))
          .subscribe(() => {
            this.filterBanks();
          });
      }
    );
    this.api_tree.getAll().subscribe(
      data=>{
        //console.log(data);
        
        this.banks1 = data;

        // set initial selection
        this.bankCtrl1.setValue(this.banks1);

        // load the initial bank list
        this.filteredBanks1.next(this.banks1.slice());

        // listen for search field value changes
        this.bankFilterCtrl1.valueChanges
          .pipe(takeUntil(this._onDestroy))
          .subscribe(() => {
            this.filterBanks();
          });
      }
    );

    //four

    this.api_four.getAll().subscribe(
      data=>{
        //console.log(data);
        
        this.banks2 = data;

        // set initial selection
        this.bankCtrl2.setValue(this.banks2);

        // load the initial bank list
        this.filteredBanks2.next(this.banks2.slice());

        // listen for search field value changes
        this.bankFilterCtrl2.valueChanges
          .pipe(takeUntil(this._onDestroy))
          .subscribe(() => {
            this.filterBanks();
          });
      }
    );

    this.item = this.fb.group({
     // idcat: ['', [Validators.required, Validators.minLength(1)]],
      precio: ['', [Validators.required, Validators.minLength(1)]],
      cantidad: ['', [Validators.required, Validators.minLength(1)]],
      
      id:[null]
    });
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }
  protected filterBanks() {
    if (!this.banks) {
      return;
    }
    // get the search keyword
    let search = this.bankFilterCtrl.value;
    if (!search) {
      this.filteredBanks.next(this.banks.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the banks
    this.filteredBanks.next(
      this.banks.filter(bank => bank.nombre.toLowerCase().indexOf(search) > -1)
    );
  }
  protected filterBanks1() {
    if (!this.banks1) {
      return;
    }
    // get the search keyword
    let search = this.bankFilterCtrl1.value;
    if (!search) {
      this.filteredBanks1.next(this.banks1.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the banks
    this.filteredBanks1.next(
      this.banks1.filter(bank1 => bank1.codigo.toLowerCase().indexOf(search) > -1)
    );
  }
  protected filterBanks2() {
    if (!this.banks2) {
      return;
    }
    // get the search keyword
    let search = this.bankFilterCtrl2.value;
    if (!search) {
      this.filteredBanks2.next(this.banks2.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the banks
    this.filteredBanks2.next(
      this.banks2.filter(bank2 => bank2.tipomov.toLowerCase().indexOf(search) > -1)
    );
  }

  onSubmit(dataForm){
    if(dataForm.id == null){
      if (this.bankCtrl.value instanceof Array &&this.bankCtrl1.value instanceof Array &&this.bankCtrl2.value instanceof Array) {
      }else{
        dataForm.id_producto = this.bankCtrl.value.id;
        dataForm.id_estanteria = this.bankCtrl1.value.id;
        dataForm.idtipomovimiento = this.bankCtrl2.value.id;
        console.log(dataForm);
        
        this.api.postOne(dataForm).subscribe(
          data=>{
            console.log(data);
            
           this.items.push(data);
           this.item.controls.precio.setValue('');
           this.item.controls.cantidad.setValue('');
           this.bankCtrl.setValue(this.banks);
           this.bankCtrl1.setValue(this.banks1);
           this.bankCtrl2.setValue(this.banks2);
          }
        );
      }      
    }else{
      dataForm.id_producto = this.bankCtrl.value.id;
      dataForm.id_estanteria = this.bankCtrl1.value.id;
      dataForm.idtipomovimiento = this.bankCtrl2.value.id;
         
      this.api.putOne(dataForm).subscribe(
        data=>{
          //this.Categorias.push(data);
          for(var i in this.items){
            if(this.items[i].id == data.id){
              this.items[i] = data;
            }
          }
          
          this.items.push(data);
          this.item.controls.precio.setValue('');
          this.item.controls.cantidad.setValue('');
          this.bankCtrl.setValue(this.banks);
          this.bankCtrl1.setValue(this.banks1);
          this.bankCtrl2.setValue(this.banks2);
        }
      );
    }
  }
  edit(item){
    this.bankCtrl2.setValue(item.tt_tipomov);
    this.bankCtrl1.setValue(item.tt_estanterias);
    this.bankCtrl.setValue(item.tt_productos);
    this.item.controls.precio.setValue(item.precio);
    this.item.controls.cantidad.setValue(item.cantidad);
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
