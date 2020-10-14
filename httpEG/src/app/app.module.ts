import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesComponent } from './routes/articles/articles.component';
import { AccountComponent } from './routes/account/account.component';

const routes: Routes = [
  //name of path uri - - -  actual compnent it links to
  { path: "Articles", component: ArticlesComponent},
  { path: "Account", component: AccountComponent}

]; // sets up routes constant for us to store our list of routes


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ArticleListComponent,
    ArticleDetailsComponent,
    ArticlesComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
