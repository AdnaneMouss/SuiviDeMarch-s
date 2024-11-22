import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import HttpClient to make HTTP requests
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule for the standalone component

@Component({
  selector: 'app-root',
  template: `<h1>{{ message }}</h1>`,
  standalone: true,
  imports: [HttpClientModule]  // Import HttpClientModule here for standalone components
})
export class AppComponent implements OnInit {
  message: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('http://localhost:8080/api/data', { responseType: 'text' }).subscribe(
      (response) => {
        this.message = response;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
