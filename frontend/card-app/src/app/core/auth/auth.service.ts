import { Injectable } from '@angular/core';
import { IUser } from '../../entity/user/user.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  account: IUser | null = null
  userState = new BehaviorSubject<IUser | null>(null)

  constructor() {}

  setUserState(user: IUser | null): void {
    this.userState.next(user)
  }

  getUserState(): Observable<IUser | null> {
    return this.userState.asObservable()
  }
}
