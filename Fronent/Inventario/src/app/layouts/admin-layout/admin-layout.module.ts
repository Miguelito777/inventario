import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { UserProfile2Component } from '../../user-profile2/user-profile2.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MotivoComponent } from '../motivo/motivo.component';
import { BodegasComponent } from '../bodegas/bodegas.component';
import { PasillosComponent } from '../pasillos/pasillos.component';
import { EstanteriasComponent } from '../estanterias/estanterias.component';
import { ProductosComponent } from '../productos/productos.component';
import { MovimientosComponent } from '../movimientos/movimientos.component';
import { TipomovComponent } from '../tipomov/tipomov.component';
import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
    MatSelectModule,
  MatAutocompleteModule
} from '@angular/material';
import { from } from 'rxjs';
import { CategoriaComponent } from '../categoria/categoria.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatAutocompleteModule
  ],
  declarations: [
    DashboardComponent,
    CategoriaComponent,
    UserProfileComponent,
    UserProfile2Component,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    MotivoComponent,
    BodegasComponent,
    PasillosComponent,
    EstanteriasComponent,
    ProductosComponent,
    MovimientosComponent,
    TipomovComponent,
    


  ]
})

export class AdminLayoutModule {}
