import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'INICIO',  icon: 'dashboard', class: '' },
    { path: '/categoria', title: 'CATEGORIAS',  icon: 'dashboard', class: '' },
    { path: '/Pasillo', title: 'MOTIVOS',  icon:'person', class: '' },
    { path: '/user-profile2', title: 'BODEGAS',  icon:'person', class: '' },
    { path: '/table-list', title: 'PASILLOS',  icon:'content_paste', class: '' },
    { path: '/typography', title: 'ESTANTERIAS',  icon:'library_books', class: '' },
    { path: '/icons', title: 'TIPOS DE MOVIMIENTO',  icon:'bubble_chart', class: '' },
    { path: '/maps', title: 'PRODUCTOS',  icon:'location_on', class: '' },
    { path: '/notifications', title: 'MOVIMIENTOS',  icon:'notifications', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
