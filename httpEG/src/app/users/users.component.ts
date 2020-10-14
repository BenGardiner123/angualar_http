import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

  createUser(username: string, email: string, password: string){
    this.userService.registerUser( username,email, password)

  }

  loginUser(username: string, email: string, password: string){
    this.userService.LoginUser( email, password)

  }
}

