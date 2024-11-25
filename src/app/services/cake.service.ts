import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cake } from '../cake/cake';

@Injectable({
  providedIn: 'root',
})
export class CakeService {
  constructor(private client: HttpClient) {}

  private apiUrl = 'http://localhost:8080/api/cakes';

  getAllCakes(): Observable<Cake[]> {
    return this.client.get<Cake[]>(this.apiUrl);
  }
}
