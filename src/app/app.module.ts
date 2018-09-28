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
import { FrontPageSearchbarComponent } from './front-page-searchbar/front-page-searchbar.component';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { RecipeCardContainerComponent } from './recipe-card-container/recipe-card-container.component';
import { ViewRecipesComponent } from './view-recipes/view-recipes.component';
import { RecipePageComponent } from './recipe-page/recipe-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PublisherContainerComponent } from './publisher-container/publisher-container.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FrontPageComponent,
    CreateUserComponent,
    MyReciplansComponent,
    FrontPageHeaderComponent,
    FrontPageSearchbarComponent,
    RecipeCardComponent,
    RecipeCardContainerComponent,
    ViewRecipesComponent,
    RecipePageComponent,
    AdminPageComponent,
    PublisherContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
