import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontPageComponent } from './front-page/front-page.component';
import { MyReciplansComponent } from './my-reciplans/my-reciplans.component';
import { RecipePageComponent } from './recipe-page/recipe-page.component';
import { AuthGuard } from './auth-guard.service';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  // Core
  {
    path: '',
    component: FrontPageComponent,
  },
  {
    path: 'page/:pageNumber',
    component: FrontPageComponent,
    children: [
      {
        path: '',
        component: FrontPageComponent,
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'search/:query',
    children: [
      {
        path: '',
        component: FrontPageComponent,
        pathMatch: 'full'
      },
      {
        path: 'page/:pageNumber',
        component: FrontPageComponent
      },
      {
        path: 'page',
        component: FrontPageComponent
      }
    ]
  },
  {
    path: 'recipe/:id',
    component: RecipePageComponent
  },
  {
    path: 'recipe',
    component: FrontPageComponent
  },
  // Unregistered user
  {
    path: 'join',
    component: RegisterComponent
  },
  {
    path: 'sign-in',
    component: LoginComponent
  },
  // Registered user
  {
    path: 'reciplans',
    component: MyReciplansComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'add-new',
        component: FrontPageComponent
      }
    ]
  },
  // Fallback
  {
    path: '**',
    component: FrontPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
