import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DairyProduct } from '../models/dairy-product';
import { DairyProductService } from '../services/dairy-product.service';

@Component({
  selector: 'app-landing-view',
  templateUrl: './landing-view.component.html',
  styleUrls: ['./landing-view.component.css']
})
export class LandingViewComponent implements OnInit {
  products: DairyProduct[] = [];
  searchText: string = '';
  selectedCategory: string = '';
  categories: string[] = [];

  constructor(private dairyProductService: DairyProductService, private router: Router) {}

  ngOnInit() {
    this.fetchDairyProducts();
  }

  fetchDairyProducts() {
    this.dairyProductService.getDairyProducts().subscribe((products) => {
      this.products = products;
      this.getCategories();
    });
  }

  getCategories() {
    this.products.forEach((product) => {
      if (!this.categories.includes(product.category)) {
        this.categories.push(product.category);
      }
    });
  }

  navigateToOrderView(product: DairyProduct) {
    this.router.navigate(['/order-view', product.id]);
  }

  filteredProducts() {
    return this.products.filter((product) => {
      const searchMatch = product.name.toLowerCase().includes(this.searchText.toLowerCase());
      const categoryMatch = this.selectedCategory ? product.category === this.selectedCategory : true;
      return searchMatch && categoryMatch;
    });
  }
}