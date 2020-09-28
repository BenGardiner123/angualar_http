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

  createArticle(){
    this.articlesService.createAnonPost("Heckor_Ma-Lec", {
      title: "One weird trick so that Angualr Devs hate him",
      description:"click to find out more",
      body: "https://memegenerator.net/img/instances/63094889.jpg"
    })
  }
  

  createUser(username: string, password: string, email: string){
    this.userService.makeUser(username, email, password);
  }
  
 


}
