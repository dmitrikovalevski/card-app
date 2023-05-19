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
    path: 'card',
    loadChildren: () => import('./entity/card/module/card.module').then(m => m.CardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
