import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: {
      auth: false
    }
  },
  {
    path: 'auth',
    component: LoginComponent,
    data: {
      auth: true
    }
  },
  {
    path: '',
    loadChildren: () => import('./entity/entity-routing.module.').then(m => m.EntityRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
