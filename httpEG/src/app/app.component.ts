import { UserService } from './user.service';
import { ArticlesEnvelope, Article } from './article';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ArticlesService } from './articles.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'httpEG';
  public art: Article[];

  public articlesService: ArticlesService;
  public userService: UserService;
  
  constructor(articlesService:ArticlesService, userService: UserService) {
    this.articlesService = articlesService
    this.userService = userService;
  }


 
  

 

}
