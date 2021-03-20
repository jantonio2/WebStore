import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product.model';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products!: Product[];

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.products = this.productService.getAllProducts();
  }

  clickProduct(id: number) {
    console.log('Product: ' + id);
  }
}
