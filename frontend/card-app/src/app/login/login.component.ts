import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { UserService } from '../entity/user/user.service';
import { IUser, IUserLoginFormData } from '../entity/user/user.model';
import { ActivatedRoute, Route } from '@angular/router';
import { AuthService } from '../core/auth/auth.service';
import { Subscription } from 'rxjs';


type TypeLoginForm = {
  name: FormControl<string | null>;
  email: FormControl<string | null>;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  isAuthMode?: boolean;
  createUser$?: Subscription;
  authorization$?: Subscription;
  user?: IUser;

  loginForm = this.fb.group<TypeLoginForm>({
    name: new FormControl(null, {nonNullable: true}),
    email: new FormControl(null, {nonNullable: true}),
  })

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.router.data.subscribe(
      (data) => this.isAuthMode = data['auth']
    )
  }

  ngOnDestroy(): void {
    this.createUser$?.unsubscribe()
    this.authorization$?.unsubscribe()
  }

  createUser(): void {
    this.createUser$ = this.userService.createUser(this.checkLoginFormData()).subscribe(
      (data) => { console.log(data) },
      (error) => { console.log(error.error.message) }
    )
  }

  authorization(): void {
    this.authorization$ = this.userService.authorization(this.checkLoginFormData()).subscribe(
      (data) => {this.authService.setUserState(data) },
      (error) => { console.log(error.error.message) }
    )
  }
  //dzmitry.kavaleuski@mail.com

  protected sendCredentials(): void {
    if (this.isAuthPageMode()) {
      this.authorization()
    } else {
      this.createUser()
    }
  }

  protected setButtonTitle(): string {
    return this.isAuthPageMode() ? 'Sign-in' : 'Sign-up'
  }

  private checkLoginFormData(): IUserLoginFormData {
    return {
      name: this.loginForm.get('name')?.value!,
      email: this.loginForm.get('email')?.value!
    }
  }

  private isAuthPageMode(): boolean {
    return this.isAuthMode!
  }

}
