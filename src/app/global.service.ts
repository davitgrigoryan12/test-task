import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  dataUrl: string = 'api/products'

  constructor(private http: HttpClient) { 
    //
  }

  getTableData(): Observable<any> {
    return this.http.get(this.dataUrl)
  }

  createProduct(product: any): Observable<any>{
    return this.http.post(this.dataUrl, product)
  }

  delete(id: number): Observable<any>{
    return this.http.delete(`${this.dataUrl}/${id}`)
  }

}
