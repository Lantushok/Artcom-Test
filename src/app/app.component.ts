import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public products;
  public selectedProduct;
  objectKeys = Object.keys;
  title = 'ArtcomTest';
  constructor ( private productService: ProductService,
                ) {}
  ngOnInit() {
    this.products = this.productService.getProductData();
    console.log('products', this.products);
  }
  public selectProduct(product) {
    this.selectedProduct = product;
    console.log('product is selected');
  }
}
