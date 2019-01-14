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
import { FilterPipe } from './filter.pipe';
import { PageHeaderComponent } from './page-header/page-header.component';
import { FavoriteButtonComponent } from './favorite-button/favorite-button.component';
import { FooterComponent } from './footer/footer.component';


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
    PublisherContainerComponent,
    HtmlCharactersPipe,
    PaginatorComponent,
    QuerySuggestionsComponent,
    RatingComponent,
    RegisterComponent,
    LoginComponent,
    FilterPipe,
    PageHeaderComponent,
    FavoriteButtonComponent,
    FooterComponent
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
          isLoggedIn: false,
          name: '',
          ratings: [],
          savedRecipes: []
        },
        recipeCache: {
          query: null,
          pageNumber: 1,
          recipes: []
        }
      }
    );
  }
}

// isLoggedIn: true,
//           name: 'bob',
//           ratings: [],
//           savedRecipes: [
//             {
//               publisher: 'Closet Cooking',
//               title: 'Jalapeno Popper Grilled Cheese Sandwich',
//               source_url: 'http://www.closetcooking.com/2011/04/jalapeno-popper-grilled-cheese-sandwich.html',
//               recipe_id: '35382',
//               image_url: 'http://static.food2fork.com/Jalapeno2BPopper2BGrilled2BCheese2BSandwich2B12B500fd186186.jpg',
//               social_rank: 100,
//               publisher_url: 'http://closetcooking.com'
//             },
//             {
//               publisher: 'The Pioneer Woman',
//               title: 'Perfect Iced Coffee',
//               source_url: 'http://thepioneerwoman.com/cooking/2011/06/perfect-iced-coffee/',
//               recipe_id: '47024',
//               image_url: 'http://static.food2fork.com/icedcoffee5766.jpg',
//               social_rank: 100,
//               publisher_url: 'http://thepioneerwoman.com'
//             },
//             {
//               publisher: 'The Pioneer Woman',
//               title: 'Crash Hot Potatoes',
//               source_url: 'http://thepioneerwoman.com/cooking/2008/06/crash-hot-potatoes/',
//               recipe_id: '47319',
//               image_url: 'http://static.food2fork.com/CrashHotPotatoes5736.jpg',
//               social_rank: 100,
//               publisher_url: 'http://thepioneerwoman.com'
//             }
//           ]
