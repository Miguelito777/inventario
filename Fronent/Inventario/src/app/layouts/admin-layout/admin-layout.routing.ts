import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { UserProfile2Component } from '../../user-profile2/user-profile2.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { CategoriaComponent } from '../categoria/categoria.component';
import { EstanteriasComponent } from '../estanterias/estanterias.component';
import { MotivoComponent } from '../motivo/motivo.component';
import { TipomovComponent } from '../tipomov/tipomov.component';

import { MovimientosComponent } from '../movimientos/movimientos.component';
import { ProductosComponent } from '../productos/productos.component';
import { BodegasComponent } from '../bodegas/bodegas.component';
import { PasillosComponent } from '../pasillos/pasillos.component';
export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'bodegas',      component: BodegasComponent },
    { path: 'dashboard',   component: DashboardComponent },
    { path: 'categoria',   component: CategoriaComponent },
    //{ path: 'estanteria',   component: EstanteriasComponent },
    { path: 'motivo',     component: MotivoComponent },
    //{ path: 'movimientos',     component: MovimientosComponent },
    { path: 'Pasillos',          component: PasillosComponent },
    //{ path: 'productos',           component: ProductosComponent},
    //{ path: 'tipomov',  component: TipomovComponent },
    //{ path: 'upgrade',        component: UpgradeComponent }

];
