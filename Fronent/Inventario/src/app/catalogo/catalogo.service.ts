import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {
  private url="https://rocky-ravine-31232.herokuapp.com/";
  public finallyUrl:any='';
  constructor(
    private http: HttpClient
  ) { }
  private getUrl(base, service) {   
    this.finallyUrl=base+service;
  }
  getEstados(): Observable<any> {    
    return this.http.get<any>('https://rocky-ravine-31232.herokuapp.com/'+'Estado/all')
    .pipe(
      catchError(this.handleError('Expediente/GetAll', undefined))
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
