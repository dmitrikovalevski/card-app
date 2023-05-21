import { Router } from '@angular/router';
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
    protected authService: AuthService,
    protected router: Router,
  ) {}

  ngOnInit(): void {
    this.authService.getUserState().subscribe(
      (account) => {
        if (account !== null) {
          this.router.navigate(['/cards'])
        } else {
          this.router.navigate(['/'])
        }
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
