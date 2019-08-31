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
    { path: '/motivo', title: 'MOTIVOS',  icon:'person', class: '' },
    { path: '/bodegas', title: 'BODEGAS',  icon:'person', class: '' },
    { path: '/Pasillos', title: 'PASILLOS',  icon:'content_paste', class: '' },
    { path: '/Estanterias', title: 'ESTANTERIAS',  icon:'library_books', class: '' },
   { path: '/tipomov', title: 'TIPOS DE MOVIMIENTO',  icon:'bubble_chart', class: '' },
     { path: '/productos', title: 'PRODUCTOS',  icon:'location_on', class: '' },
   { path: '/movimientos', title: 'MOVIMIENTOS',  icon:'notifications', class: '' }
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
