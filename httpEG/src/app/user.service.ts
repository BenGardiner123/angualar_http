
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateNewUser, User, UserEnvelope } from './user';
import { Token } from '@angular/compiler/src/ml_parser/lexer';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  loading: boolean = false;
  loaded: boolean = false;
  token: Token;

  constructor(private httpClient: HttpClient) {
    this.httpClient = httpClient; 
  }

  users: User[];


  createUser(username: string, email: string, password: string){
    let request = this.httpClient.post<UserEnvelope>("https://swindev.me/users",
    {
      user: {
        username: username, 
        email: email, 
        password: password
      }

    } as CreateNewUser);

    request.subscribe((response) => {
      // shorthand for creating a new array - pushing all the old articles into it and adding the new article
      
      
      
    });
  }

}
