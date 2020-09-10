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
  constructor(articlesService:ArticlesService) {
    this.articlesService = articlesService
  }

  

 


}
