import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardRoutingModule } from './card-routing.module';
import { CardComponent } from '../components/list/card.component'; 


@NgModule({
  declarations: [CardComponent],
  imports: [CommonModule, CardRoutingModule]
})
export class CardModule { }
