import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ICard } from '../interface/card.interface';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class CardService {
  path = 'http://localhost:3001/'
  
  constructor(
    private http: HttpClient
  ) { }

  getAllCards(): Observable<ICard[]> {
    return this.http.get<ICard[]>(this.path + 'card')
  }

  getCardById(id: number): Observable<ICard> {
    return this.http.get<ICard>(this.path + 'card/' + id)
  }

  createCard(data: ICard): Observable<ICard> {
    return this.http.post<ICard>(this.path + 'card', data)
  }

  updateCard(data: ICard): Observable<ICard> {
    return this.http.put<ICard>(this.path + 'card/' + data.id + '/update', data)
  }

  deleteCard(id: number): Observable<ICard> {
    return this.http.delete<ICard>(this.path + 'card/' + id + '/delete')
  }
}
