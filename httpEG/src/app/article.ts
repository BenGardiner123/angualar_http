export interface ArticlesEnvelope {
    articlesCount: number;
    articles: Article[];
}

export interface Article {
    articleId: number;
    title: string;
}