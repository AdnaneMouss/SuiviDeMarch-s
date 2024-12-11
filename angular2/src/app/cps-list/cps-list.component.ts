import { Component, OnInit } from '@angular/core';
import { CpsService } from '../services/cps.service';
import { CpsDTO } from '../models/cps.model';
import {Project} from "../models/project.model";
import {ProjectService} from "../services/project.service";

@Component({
  selector: 'app-cps-list',
  templateUrl: './cps-list.component.html',
  styleUrls: ['./cps-list.component.css']
})
export class CpsComponent implements OnInit {
  filteredProjects: Project[] = [];
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
  constructor(private cpsService: CpsService, private projectService: ProjectService) { }

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
    const user = JSON.parse(localStorage.getItem('user') || '{}'); // Get logged-in user
    const employeeId = user?.id; // Extract the user ID

    if (!employeeId) {
      this.errorMessage = 'You are not logged in. Please log in to add a CPS.';
      return;
    }

    // Set the proposeParId to the logged-in user's ID
    this.cps.proposeParId = employeeId;

    this.cpsService.addCps(this.cps).subscribe({
      next: (response) => {
        this.successMessage = 'CPS added successfully!';
        this.loadCps(); // Refresh the CPS list
        this.resetForm(); // Reset the form
      },
      error: (err) => {
        this.resetForm();
        this.loadCps(); // Reload the list in case of error to stay up to date
      }
    });
  }


  loadProjects(): void {
    const user = JSON.parse(localStorage.getItem('user') || '{}'); // Get logged-in user
    const employeeId = user?.id; // Extract the employee ID

    if (!employeeId) {
      this.errorMessage = 'You are not logged in. Please log in to view your projects.';
      return;
    }

    this.projectService.getProjects().subscribe({
      next: (data) => {
        console.log('Fetched projects:', data);
        this.projects = data;

        // Filter projects to only include those created by the logged-in employee
        this.filteredProjects = this.projects.filter(
          (project) => project.proposeParNom === user.nom
        );
      },
      error: (err) => {
      },
    });
  }

// Method to load CPS data from the service
  loadCps(): void {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const userId = user?.id;

    if (userId) {
      this.cpsService.getAllCps(userId).subscribe({
        next: (data) => {
          console.log('Fetched user-specific cps:', data);
          this.cpsList = data;
        },
        error: (err) => {

        }
      });
    } else {
      this.errorMessage = 'User is not authenticated.';
    }
  }


  deleteCPS(id: number): void {
    if (confirm(`Are you sure you want to delete the CPS?`)) {
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
