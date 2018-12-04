// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.import';
import { FrontPageComponent } from './front-page/front-page.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { MyReciplansComponent } from './my-reciplans/my-reciplans.component';
import { FrontPageHeaderComponent } from './front-page-header/front-page-header.component';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { RecipeCardContainerComponent } from './recipe-card-container/recipe-card-container.component';
import { RecipePageComponent } from './recipe-page/recipe-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PublisherContainerComponent } from './publisher-container/publisher-container.component';
import { NgReduxModule } from '@angular-redux/store';
import { StarRatingModule } from 'angular-star-rating';
import { HtmlCharactersPipe } from './html-characters.pipe';
import { PaginatorComponent } from './paginator/paginator.component';
import { QuerySuggestionsComponent } from './query-suggestions/query-suggestions.component';
import { RatingComponent } from './rating/rating.component';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { RecipesService } from './recipes.service';

import { NgRedux } from '@angular-redux/store';
import { IAppState, rootReducer } from './store';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FrontPageComponent,
    CreateUserComponent,
    MyReciplansComponent,
    FrontPageHeaderComponent,
    RecipeCardComponent,
    RecipeCardContainerComponent,
    RecipePageComponent,
    AdminPageComponent,
    PublisherContainerComponent,
    HtmlCharactersPipe,
    PaginatorComponent,
    QuerySuggestionsComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    StarRatingModule.forRoot()
  ],
  providers: [
    AuthGuard,
    AuthService,
    RecipesService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(
    private ngRedux: NgRedux<IAppState>
  ) {
    this.ngRedux.configureStore(
      rootReducer, {
        userInfo: {
          name: 'Bob',
          isLoggedIn: true,
          ratings: []
        }
      }
    );
  }
}
