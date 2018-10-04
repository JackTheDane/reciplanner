import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontPageComponent } from './front-page/front-page.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { MyReciplansComponent } from './my-reciplans/my-reciplans.component';
import { RecipePageComponent } from './recipe-page/recipe-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';

const routes: Routes = [
  {
    path: '',
    component: FrontPageComponent
  },
  {
    path: 'search/:query',
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
    path: 'recipe/:id',
    component: RecipePageComponent
  },
  {
    path: 'admin',
    component: AdminPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
