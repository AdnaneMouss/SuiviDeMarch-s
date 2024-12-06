import { Component } from '@angular/core';
import { User } from "../models/user.model";
import { UserService } from "../services/user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users: User[] = [];
  errorMessage: string = '';
  newUser: User = {
    id: 0,
    nom: '',
    email: '',
    gsm: '',
    type: '',
    password: '',
    projetsProposesIds: [],
    projetsApprouvesIds: [],
    tachesIds: []
  };

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (err) => {
        this.errorMessage = 'Error fetching users: ' + err.message;
      },
    });
  }

  addUser(): void {
    this.userService.addUser(this.newUser).subscribe({
      next: () => {
        alert('User added successfully.');
        this.fetchUsers(); // Refresh the user list
        this.resetNewUser(); // Reset the form
      },
      error: (err) => {
        alert('Error adding user: ' + err.message);
      }
    });
  }

  resetNewUser(): void {
    this.newUser = {
      id: 0,
      nom: '',
      email: '',
      gsm: '',
      type: '',
      password: '',
      projetsProposesIds: [],
      projetsApprouvesIds: [],
      tachesIds: []
    };
  }

  deleteUser(id: number): void {
    if (confirm(`Are you sure you want to delete the user with ID ${id}?`)) {
      this.userService.deleteUser(id).subscribe({
        next: () => {
          this.users = this.users.filter(user => user.id !== id);
          alert('User deleted successfully.');
        },
        error: (err) => {
          alert('Error deleting user: ' + err.message);
        }
      });
    }
  }

}
