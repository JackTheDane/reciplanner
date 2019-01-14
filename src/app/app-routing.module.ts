import { NgModule } from '@angular/core';
import { Route, Routes, RouterModule } from '@angular/router';
import { FrontPageComponent } from './front-page/front-page.component';
import { MyReciplansComponent } from './my-reciplans/my-reciplans.component';
import { RecipePageComponent } from './recipe-page/recipe-page.component';
import { AuthGuard } from './auth-guard.service';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const pageRoutes: Route = {
  path: 'page',
  children: [
    {
      path: '',
      pathMatch: 'full',
      redirectTo: '/'
    },
    {
      path: ':pageNumber',
      component: FrontPageComponent
    }
  ]
};

const routes: Routes = [
  // Core
  {
    path: '',
    pathMatch: 'full',
    component: FrontPageComponent,
  },
  pageRoutes,
  {
    path: 'search',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/'
      },
      {
        path: ':query',
        children: [
          {
            path: '',
            pathMatch: 'full',
            component: FrontPageComponent
          },
          pageRoutes
        ]
      }
    ]
  },
  {
    path: 'recipe',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/'
      },
      {
        path: ':id',
        component: RecipePageComponent
      }
    ]
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
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: MyReciplansComponent
      },
      {
        path: 'add-new',
        component: FrontPageComponent
      }
    ]
  },
  // Fallback
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/join'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
