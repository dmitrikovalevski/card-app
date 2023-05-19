import { IUser } from '../entity/user/user.model';
import { AuthService } from './../core/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  account?: IUser | null = null;

  constructor(
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
    this.authService.getUserState().subscribe(
      (account) => {
        this.account = account
      }
    )
  }

  greeting(): string {
    return this.account ? `says hello to ${this.account.name}` : ''
  }

  isAccount(): boolean {
    return this.account ? true : false
  }

  signOut(): void {
    this.authService.setUserState(null)
  }

}
