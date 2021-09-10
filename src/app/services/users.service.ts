import { Injectable } from '@angular/core';
import { USERS } from 'src/app/components/users/mock-users';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  id: number,
  name: string,
  username: string,
  email: string,
}

export interface UserWithAddress {
  id: number,
  name: string,
  username: string,
  email: string,
  address: Address;
}

export interface Address {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users = USERS;

  constructor(private readonly client: HttpClient) { }

  getUsers(): Observable<UserWithAddress[]> {
    const url = "https://jsonplaceholder.typicode.com/users";

    return this.client.get<UserWithAddress[]>(url);
  }
}
