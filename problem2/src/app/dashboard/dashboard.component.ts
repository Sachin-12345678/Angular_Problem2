import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  products: any[] = [];
  filteredProducts: any[] = [];
  ascendingOrder = true;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.products = this.dataService.getProductData();
    this.filteredProducts = [...this.products]; 
  }

  // sorting by price-->
  sortByPrice(): void {
    this.filteredProducts.sort((a, b) => {
      if (this.ascendingOrder) {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    this.ascendingOrder = !this.ascendingOrder;
  }

  // filters products--->
  filterProducts(event: any): void {
    const query = event.target.value;
    if (query !== null && query !== undefined) {
      if (!query.trim()) {
        this.filteredProducts = [...this.products];
      } else {
        this.filteredProducts = this.products.filter(product =>
          product.productName.toLowerCase().includes(query.toLowerCase())
        );
      }
    }
  }
}
