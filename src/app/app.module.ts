// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgReduxModule } from '@angular-redux/store';
import { NgRedux } from '@angular-redux/store';

// Material

// Components
import { PaginatorComponent } from './paginator/paginator.component';
import { QuerySuggestionsComponent } from './query-suggestions/query-suggestions.component';
import { RatingComponent } from './rating/rating.component';
import { PublisherContainerComponent } from './publisher-container/publisher-container.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { MyReciplansComponent } from './my-reciplans/my-reciplans.component';
import { FrontPageHeaderComponent } from './front-page-header/front-page-header.component';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { RecipeCardContainerComponent } from './recipe-card-container/recipe-card-container.component';
import { RecipePageComponent } from './recipe-page/recipe-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

// Services
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { RecipesService } from './recipes.service';

// Pipes
import { HtmlCharactersPipe } from './html-characters.pipe';

// Other
import { AppRoutingModule } from './app-routing.module';
import { StarRatingModule } from 'angular-star-rating';
import { MaterialModule } from './material.import';
import { IAppState, rootReducer } from './store';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FrontPageComponent,
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
    RatingComponent,
    RegisterComponent,
    LoginComponent
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
          isLoggedIn: true,
          name: 'bob',
          ratings: [],
          savedRecipes: []
        }
      }
    );
  }
}
