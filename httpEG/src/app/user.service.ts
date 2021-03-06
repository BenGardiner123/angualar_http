import { getTestBed } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, UserCreateCommand, UserEnvelope, UserLoginCommand } from './user';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { EmailValidator } from '@angular/forms';

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


  LoginUser(email: string, password: string){
    let request = this.httpClient.post<UserEnvelope>("https://swindev.me/users/login", 
      {
        user: {
          email: email,
          password: password
        }
      } as UserLoginCommand
    );
    
    request.subscribe((response) => { console.log(response) },
    (error) => {
      if(error.status == 401){
          alert("Login failed due to inccorect email or wrong password")
      }
    }
  );

  }

  registerUser(username: string, email: string, password: string){
    let request = this.httpClient.post<UserEnvelope>("https://swindev.me/users",
    {
      user: {
        username: username,
        email: email,
        password: password
      }
    } as UserCreateCommand
  );
  
  request.subscribe((response) => { console.log(response) },
  (error) => {
    if(error.status == 401){
        alert("Login failed due to inccorect email or wrong password")
    }
  }
);
}
}
