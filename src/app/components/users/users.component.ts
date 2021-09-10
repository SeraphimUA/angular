import { Component, OnInit } from '@angular/core';
import { UsersService, UserWithAddress } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  usersFromJSON: UserWithAddress[];

  constructor(readonly usersService: UsersService) {
    this.usersFromJSON = [];
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    var users$ = this.usersService.getUsers();
    
    users$.subscribe(result => this.usersFromJSON = result);
  }

}
