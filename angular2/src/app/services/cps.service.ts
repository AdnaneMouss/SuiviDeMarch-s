import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CpsDTO } from '../models/cps.model'; // Import the CpsDTO model

@Injectable({
  providedIn: 'root'
})
export class CpsService {

  private apiUrl = 'http://localhost:8080/api/cps/list';  // URL of the Spring Boot API

  constructor(private http: HttpClient) { }

  // Method to get all CPS
  getAllCps(): Observable<CpsDTO[]> {
    return this.http.get<CpsDTO[]>(this.apiUrl);
  }
}
