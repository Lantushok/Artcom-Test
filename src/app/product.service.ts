import { Injectable } from '@angular/core';
import * as DATA from './DATA.json';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  public getProductData() {
    return DATA.default;
  }
}
