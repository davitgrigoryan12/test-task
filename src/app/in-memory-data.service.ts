import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
      const products: any = [
        {id: 1, productName: "watch", price: 100, address: "New York", email: "aaa@gmail.com", phoneNumber: +983165656599},
        {id: 2, productName: "phone", price: 500, address: "New York", email: "phone@gmail.com", phoneNumber: +787945654},
        {id: 3, productName: "notebook", price: 1500, address: "Washington", email: "notebook@gmail.com", phoneNumber: +78945613312}
      ];
      return { products }
  }

  genId(products: any): number {
    return products.length > 0 ? Math.max(...products.map((hero: any) => hero.id)) + 1 : 11;
  }

  constructor() { }
}
