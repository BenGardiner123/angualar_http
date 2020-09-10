import { ArticlesEnvelope, Article } from './article';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'httpEG';
  public art: Article[];
  
  /**
   *
   */
  constructor(private httpClient: HttpClient) {
   this.httpClient = httpClient; 
      
  }

  login(){
    let request = this.httpClient.get<ArticlesEnvelope>( "https://swindev.me/articles");
    request.subscribe((response) => {
      console.log(response);
      this.art = response.articles;
    })
  }
}
