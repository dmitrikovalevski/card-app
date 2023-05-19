import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from '../components/list/card.component';
import { ActionCardComponent } from '../components/action/action-card.component';

const routes: Routes = [
  {
    path: '',
    component: CardComponent,
  },
  {
    path: 'new',
    component: ActionCardComponent,  
  },
  {
    path: 'update',
    component: ActionCardComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardRoutingModule { }