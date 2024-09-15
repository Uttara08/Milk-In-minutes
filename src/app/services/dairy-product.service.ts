import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DairyProduct } from '../models/dairy-product';

@Injectable({
  providedIn: 'root'
})
export class DairyProductService {
  private apiUrl = 'http://localhost:3000/dairyProduct';

  constructor(private http: HttpClient) {}

  getDairyProducts(): Observable<DairyProduct[]> {
    return this.http.get<DairyProduct[]>(this.apiUrl);
  }

  getDairyProduct(id: number): Observable<DairyProduct> {
    return this.http.get<DairyProduct>(`${this.apiUrl}/${id}`);
  }
}