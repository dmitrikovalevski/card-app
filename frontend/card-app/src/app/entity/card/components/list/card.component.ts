import { Component, OnInit } from '@angular/core';
import { CardService } from '../../service/card.service';

import { ICard } from '../../interface/card.interface';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  cards$?: Observable<ICard[]>;

  constructor(
    private cardService: CardService
  ) {}

  ngOnInit(): void {
    this.cards$ = this.cardService.getAllCards()
  }

  deleteCard(id: number): void {
    const isTrue = confirm('Вы уверены?');
    if (isTrue) {
      this.cardService.deleteCard(id).subscribe()
    }
  }
 
}
