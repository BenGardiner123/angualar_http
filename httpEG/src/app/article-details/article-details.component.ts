import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../article';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {

  @Input()
  article:Article;

  public articlesService: ArticlesService;
  
  
  constructor(articlesService:ArticlesService) {
    this.articlesService = articlesService
    
  }
  ngOnInit(): void {
  }

  showSingleArticle(){
    this.articlesService.get();
  }

}
