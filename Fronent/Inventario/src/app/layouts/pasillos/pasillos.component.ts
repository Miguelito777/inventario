import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { PasillosService } from './pasillos.service';
import { BodegasService } from '../bodegas/bodegas.service';
import { ReplaySubject, Subject } from 'rxjs';
import { MatSelect } from '@angular/material';
import { takeUntil, take } from 'rxjs/operators';
interface Bodega{
  bodega:string,
  direccion:string
}
@Component({
  selector: 'app-pasillos',
  templateUrl: './pasillos.component.html',
  styleUrls: ['./pasillos.component.scss']
})
export class PasillosComponent implements OnInit {
  items:any=[];
  item: FormGroup;
    /** list of banks */
    protected banks: Bodega[] = [];

    /** control for the selected bank */
    public bankCtrl: FormControl = new FormControl();
  
    /** control for the MatSelect filter keyword */
    public bankFilterCtrl: FormControl = new FormControl();
  
    /** list of banks filtered by search keyword */
    public filteredBanks: ReplaySubject<Bodega[]> = new ReplaySubject<Bodega[]>(1);
  
    //@ViewChild('singleSelect') singleSelect: MatSelect;
  
    /** Subject that emits when the component has been destroyed. */
    protected _onDestroy = new Subject<void>();

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
    this.item = this.fb.group({
      codigo: ['', [Validators.required, Validators.minLength(2)]],
      //bodega: ['', [Validators.required]],
      id:[null]
    });
  }
  /*ngAfterViewInit() {
    this.setInitialValue();
  }*/

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }
  /**
   * Sets the initial value after the filteredBanks are loaded initially
   */
  /*protected setInitialValue() {
    this.filteredBanks
      .pipe(take(1), takeUntil(this._onDestroy))
      .subscribe(() => {
        // setting the compareWith property to a comparison function
        // triggers initializing the selection according to the initial value of
        // the form control (i.e. _initializeSelection())
        // this needs to be done after the filteredBanks are loaded initially
        // and after the mat-option elements are available
        this.singleSelect.compareWith = (a: Bodega, b: Bodega) => a && b && a.id === b.id;
      });
  }*/

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
      this.banks.filter(bank => bank.bodega.toLowerCase().indexOf(search) > -1)
    );
  }
  onSubmit(dataForm){
    if(dataForm.id == null){
      if (this.bankCtrl.value instanceof Array) {
      }else{
        dataForm.idbodega = this.bankCtrl.value.id;
        this.api.postOne(dataForm).subscribe(
          data=>{
            this.items.push(data);
            this.item.controls.codigo.setValue('');
            this.bankCtrl.setValue(this.banks);
          }
        );
      }      
    }else{
      dataForm.idbodega = this.bankCtrl.value.id;      
      this.api.putOne(dataForm).subscribe(
        data=>{
          //this.Categorias.push(data);
          for(var i in this.items){
            if(this.items[i].id == data.id){
              this.items[i] = data;
            }
          }
          this.item.controls.codigo.setValue('');
          this.bankCtrl.setValue(this.banks);
          this.item.controls.id.setValue(null);
        }
      );
    }
  }
  edit(item){
    this.item.controls.codigo.setValue(item.codigo);
    this.bankCtrl.setValue(item.tc_bodega);
    //this.item.controls.idbodega.setValue(item.idbodega);
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
