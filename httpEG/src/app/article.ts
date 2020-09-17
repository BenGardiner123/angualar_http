
export interface ArticlesEnvelope {
    articlesCount: number;
    articles: Article[];
}

export interface ArticleEnvelope{
    article: Article;
}

export interface CreateAnonymousCommand{
    article: Article;
    username: string;
}

export interface Article {
    articleId?: number| null;
    title: string;
    description: string;
    body: string; 

}

