import { Component, OnInit } from '@angular/core';
import { CardService } from '../../service/card.service';
import { ICard } from '../../interface/card.interface';  
import { ActionCardFormService } from './service/form/action-card-form.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-action-card',
  templateUrl: './action-card.component.html',
  styleUrls: ['./action-card.component.scss']
})
export class ActionCardComponent implements OnInit {

  cardForm = this.cardFormService.createCradForm()

  constructor(
    protected cardService: CardService,
    protected cardFormService: ActionCardFormService,
    protected route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const cardID = Number(params.get('id'))
      if (cardID) {
        this.cardService.getCardById(cardID).subscribe(card => {
          this.cardFormService.udateCardForm(card, this.cardForm)
        })
      }
    })
  }

  saveCard(): void {
    if (this.cardForm.valid) {
      const card = this.cardValueFromForm()
      if (!card.id) {
        this.cardService.createCard(card).subscribe()
        this.resetCardForm()
      } else {
        this.cardService.updateCard(card).subscribe()
      }
    }
  }

  
  resetCardForm(): void {
    this.cardFormService.resetCardForm(this.cardForm)
  }
  
  private cardValueFromForm(): ICard {
    return {
      id: this.cardForm.get('id')!.value,
      ru: this.cardForm.get('ru')!.value,
      en: this.cardForm.get('en')!.value
    }
  }
}
