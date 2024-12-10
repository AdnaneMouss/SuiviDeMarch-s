import { Component, OnInit } from '@angular/core';
import { CpsService } from '../services/cps.service';
import { CpsDTO } from '../models/cps.model';

@Component({
  selector: 'app-cps-list',
  templateUrl: './cps-list.component.html',
  styleUrls: ['./cps-list.component.css']
})
export class CpsComponent implements OnInit {

  cpsList: CpsDTO[] = [];  // List to store CPS data

  constructor(private cpsService: CpsService) { }

  ngOnInit(): void {
    this.loadCps();
  }

  // Method to load CPS data from the service
  loadCps(): void {
    this.cpsService.getAllCps().subscribe({
      next: (data) => {
        console.log('Fetched cps:', data);
        this.cpsList = data;
      },
      error: (err) => {
      },
    });
  }
}
