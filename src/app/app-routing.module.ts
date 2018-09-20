import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontPageComponent } from './front-page/front-page.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { MyReciplansComponent } from './my-reciplans/my-reciplans.component';
import { RecipeComponent } from './recipe/recipe.component';


const routes: Routes = [
  {
    path: '',
    component: FrontPageComponent
  },
  {
    path: 'my-reciplans',
    component: MyReciplansComponent
  },
  {
    path: 'join',
    component: CreateUserComponent
  },
  {
    path: 'recipe',
    component: RecipeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
