import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardRoutingModule } from './card-routing.module';
import { ActionCardComponent } from '../components/action/action-card.component'; 
import { CardComponent } from '../components/list/card.component'; 
import { CardService } from '../service/card.service';
import { ActionCardFormService } from '../components/action/service/form/action-card-form.service';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CardComponent, 
    ActionCardComponent
  ],
  providers: [
    CardService, 
    ActionCardFormService
  ],
  imports: [
    CommonModule, 
    CardRoutingModule, 
    ReactiveFormsModule
  ]
})
export class CardModule { }
