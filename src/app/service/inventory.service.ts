import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  private baseUrl = 'http://localhost:8080/api/v1/inventory/list';

  constructor(private http: HttpClient) { }

  getInventoryList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
