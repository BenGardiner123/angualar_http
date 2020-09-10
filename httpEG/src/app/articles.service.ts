import { Injectable } from '@angular/core';
import { Article, ArticlesEnvelope } from './article';
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

  post(newart: HTMLInputElement){
    let request = this.httpClient.post<ArticlesEnvelope>( "https://swindev.me/articles", {});
    this.loading = true;
    this.loaded = false;
    request.subscribe((response) => {
      this.articles = response.articles;

      this.loading = false;
      this.loaded = true;
    });
  }

}

