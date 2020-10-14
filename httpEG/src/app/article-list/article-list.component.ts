import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../article';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  @Input()
  public article: Article[];

  public articlesService: ArticlesService;
  
  
  constructor(articlesService:ArticlesService) {
    this.articlesService = articlesService
    
  }

  createArticle(articleUsername:string, title:string, description:string, body:string){
    this.articlesService.createAnonPost(articleUsername, {title, description, body});
  }

  ngOnInit(): void {
  }



}
