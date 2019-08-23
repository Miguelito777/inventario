import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogoRoutingModule } from './catalogo-routing.module';
import { PasilloComponent } from './pasillo/pasillo.component';
import { BodegaComponent } from './bodega/bodega.component';
import { EstantesComponent } from './estantes/estantes.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [PasilloComponent, BodegaComponent, EstantesComponent],
  imports: [
    CommonModule,
    CatalogoRoutingModule,
    HttpClientModule
  ]
})
export class CatalogoModule { }
