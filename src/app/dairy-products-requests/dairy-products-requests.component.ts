import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-dairy-products-requests',
  templateUrl: './dairy-products-requests.component.html',
  styleUrls: ['./dairy-products-requests.component.css']
})
export class DairyProductsRequestsComponent implements OnInit {
  orders: Order[] = [];
  displayedColumns: string[] = ['name', 'productName', 'price', 'quantity', 'address', 'phoneNumber'];

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.fetchOrders();
  }

  fetchOrders() {
    this.orderService.getOrders().subscribe(orders => {
      this.orders = orders;
    });
  }
}