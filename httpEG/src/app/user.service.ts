import { getTestBed } from '@angular/core/testing';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateNewUser, LoginUser, User, UserEnvelope } from './user';
import { Token } from '@angular/compiler/src/ml_parser/lexer';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public users: User;
  public listOfUsers: User[];
  loading: boolean = false;
  loaded: boolean = false;
  token: Token;

  constructor(private httpClient: HttpClient) {
    this.httpClient = httpClient; 
  }


  userLogin(user: User){
    let request = this.httpClient.post<UserEnvelope>("https://swindev.me/users/login", {
      user: user
    } as LoginUser);
    
    request.subscribe((response) => console.log(response)
    );
  }

  makeUser(user:User){
    let request = this.httpClient.post<UserEnvelope>("https://swindev.me/users", {
     user: user
    } as CreateNewUser);

    request.subscribe(
      (response) => console.log(response)
    );
  }



}
