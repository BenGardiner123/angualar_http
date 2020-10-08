import { Injectable } from '@angular/core';
import { Article, ArticleEnvelope, ArticlesEnvelope, CreateAnonymousCommand} from './article';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ArticlesService {

  // deafulted to an empty array here to avoid any "undefined" issues
  public articles: Article[] = [];
  loading: boolean = false;
  loaded: boolean = false;

  constructor(private httpClient: HttpClient) {
    this.httpClient = httpClient; 
  }
  
  /**
   * go and get articleEnvelope from the sserver and store it lcoally
   */
  
  get(){
    let request = this.httpClient.get<ArticlesEnvelope>( "https://swindev.me/articles");
    this.loading = true;
    this.loaded = false;
    request.subscribe((response) => {
      this.articles = response.articles;

      this.loading = false;
      this.loaded = true;
    });
  }

  getSingleArticle(id:number){
    let request = this.httpClient.get<ArticlesEnvelope>( "https://swindev.me/articles");
    this.loading = true;
    this.loaded = false;
    request.subscribe((response) => {
      this.articles = response.articles;

      this.loading = false;
      this.loaded = true;
    });
  }

  
//  not even close brutha... check swagger docs and angualr httpClient docs 1st
  createAnonPost(username: string, article: Article){
    let request = this.httpClient.post<ArticleEnvelope>("https://swindev.me/articles/anonymous",{
    username: username,
    article: article
    } as CreateAnonymousCommand);

    
    request.subscribe((response) => {
      // shorthand for creating a new array - pushing all the old articles into it and adding the new article
      this.articles = [...this.articles, response.article];

      this.loading = false;
      this.loaded = true;
      this.get();
    });

  }

 


}