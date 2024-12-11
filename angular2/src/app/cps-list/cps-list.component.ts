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
  cps: CpsDTO = {
    id: 0,
    nom: '',
    tasks: '',
    projectId: 0,
    proposeParId: 0
  };
  projects: any[] = []; // List of available projects
  successMessage = '';
  errorMessage = '';
  constructor(private cpsService: CpsService) { }

  ngOnInit(): void {
    this.loadCps();
    this.loadProjects();
  }

  resetForm() {
    this.cps = {
      id: 0,
      nom: '',
      tasks: '',
      projectId: 0,
      proposeParId: 0
    };
  }
  onSubmit() {
    this.cpsService.addCps(this.cps).subscribe({
      next: (response) => {
        this.loadCps();
        this.resetForm();

      },
      error: () => {
        this.resetForm();
        this.loadCps();
      }
    });
  }

  loadProjects() {
    this.cpsService.getAllProjects().subscribe({
      next: (data) => {
        this.projects = data;
      },
      error: () => {
        this.errorMessage = 'Failed to load projects.';
      }
    });
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

  deleteCPS(id: number): void {
    if (confirm(`Are you sure you want to delete the user with ID ${id}?`)) {
      this.cpsService.deleteCPS(id).subscribe({
        next: () => {
          this.cpsList = this.cpsList.filter(cps => cps.id !== id);
          alert('CPS deleted successfully.');
          this.loadCps();
        },
        error: (err) => {
         this.loadCps();
        }
      });
    }
  }

}
