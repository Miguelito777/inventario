import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PasilloComponent } from './pasillo/pasillo.component';
import { BodegaComponent } from './bodega/bodega.component';

const routes: Routes = [
  { path: 'Bodega',      component: BodegaComponent },
  { path: 'Pasillo',      component: PasilloComponent },
  { path: 'Estante',      component: PasilloComponent }
  //{ path: 'user-profile',   component: UserProfileComponent },
  //{ path: 'user-profile2',   component: UserProfile2Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogoRoutingModule { }
