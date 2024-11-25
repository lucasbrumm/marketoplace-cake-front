import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Cake } from '../cake/cake'

@Injectable({
  providedIn: 'root',
})
export class CakeService {
  constructor(private client: HttpClient) {}

  private apiUrl = 'http://localhost:8080/api/cakes'

  getAllCakes(): Observable<Cake[]> {
    return this.client.get<Cake[]>(this.apiUrl)
  }

  getCake(id: number): Observable<Cake> {
    return this.client.get<Cake>(`${this.apiUrl}/${id}`)
  }

  createCake(cake: Cake): Observable<Cake> {
    return this.client.post<Cake>(this.apiUrl, cake)
  }

  updateCake(cake: Cake): Observable<Cake> {
    return this.client.put<Cake>(`${this.apiUrl}/${cake.id}`, cake)
  }

  deleteCake(id: number): Observable<void> {
    return this.client.delete<void>(`${this.apiUrl}/${id}`)
  }
}
