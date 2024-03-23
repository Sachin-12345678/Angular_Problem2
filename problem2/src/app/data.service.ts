import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  products = [
    { id: 1, productName: 'Laptop', price: 1200, category: 'Electronics' },
    { id: 2, productName: 'Smartphone', price: 800, category: 'Electronics' },
    { id: 3, productName: 'Headphones', price: 150, category: 'Electronics' },
    { id: 4, productName: 'Desk', price: 300, category: 'Furniture' },
    { id: 5, productName: 'Chair', price: 100, category: 'Furniture' },
    { id: 6, productName: 'Charger', price: 550, category: 'Electronics' },
    { id: 7, productName: 'Fan', price: 1500, category: 'Electronics' },
    { id: 8, productName: 'Motor', price: 2500, category: 'Electronics' },
    { id: 9, productName: 'Table', price: 500, category: 'Furniture' },
    { id: 10, productName: 'Door', price: 750, category: 'Furniture' }
  ];

  constructor() { }

  getProductData(): any[] {
    return this.products;
  }

  getProductDetail(productId: number): any {
    return this.products.find(product => product.id === productId);
  }
}
