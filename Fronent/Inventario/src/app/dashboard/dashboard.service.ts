import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private url="http://localhost:8000/api/";
  public finallyUrl:any='';

  constructor(
    private http: HttpClient
  ) { }
  private getUrl(base, service) {   
    this.finallyUrl=base+service;
  }
  countProducto(): Observable<any> {    
    return this.http.get<any>(this.url+'dashboard/productos/count')
    .pipe(
      catchError(this.handleError('dashboard/productos/count', undefined))
    );
  }
  countBodegas(): Observable<any> {    
    return this.http.get<any>(this.url+'dashboard/bodegas/count')
    .pipe(
      catchError(this.handleError('dashboard/bodegas/count', undefined))
    );
  }
  productosEscasos(): Observable<any> {    
    return this.http.get<any>(this.url+'dashboard/productos/escasos')
    .pipe(
      catchError(this.handleError('dashboard/productos/escasos', undefined))
    );
  }
  countIngresos(): Observable<any> {    
    return this.http.get<any>(this.url+'dashboard/countIngresos')
    .pipe(
      catchError(this.handleError('dashboard/countIngresos', undefined))
    );
  }
  countSalidas(): Observable<any> {    
    return this.http.get<any>(this.url+'dashboard/countSalidas')
    .pipe(
      catchError(this.handleError('dashboard/countSalidas', undefined))
    );
  }
  getMovimientos(idTipoMovimiento): Observable<any> {    
    return this.http.get<any>(this.url+'dashboard/getMovimientos/'+idTipoMovimiento)
    .pipe(
      catchError(this.handleError('dashboard/getMovimientos', undefined))
    );
  }
  
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      //console.error(error);
      //new recursosVarios().showNotification('top','right','Session ha expirada, ingrese al sistema de nuevo',4)
      //this.router.navigate(['/pages/login']);
      return of(result as T);
    };
  }
}
