import { Component } from '@angular/core';
import {User} from "../models/user.model";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  users: User[] = [];
  errorMessage: string = '';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.userService.getUsers().subscribe({
      next: (data) => {
        console.log('Fetched users:', data);
        this.users = data;
      },
      error: (err) => {
        this.errorMessage = 'Error fetching users: ' + err.message;
      },
    });
  }
}
