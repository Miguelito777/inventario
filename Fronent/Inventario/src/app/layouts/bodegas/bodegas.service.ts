import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BodegasService {
  private url="http://localhost:8000/api/";
  public finallyUrl:any='';

  constructor(
    private http: HttpClient
  ) { }
  private getUrl(base, service) {   
    this.finallyUrl=base+service;
  }
  getAll(): Observable<any> {    
    return this.http.get<any>(this.url+'mostrarbod')
    .pipe(
      catchError(this.handleError('mostrarbod', undefined))
    );
  }
  postOne(item): Observable<any> {    
    return this.http.post<any>(this.url+'bodega',item)
    .pipe(
      catchError(this.handleError('bodega', undefined))
    );
  }
  putOne(item): Observable<any> {    
    return this.http.put<any>(this.url+'actualizarbod/'+item.id,item)
    .pipe(
      catchError(this.handleError('actualizarbod', undefined))
    );
  }
  deleteOne(id): Observable<any> {    
    return this.http.delete<any>(this.url+'eliminarbod/'+id)
    .pipe(
      catchError(this.handleError('eliminarbod', undefined))
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
