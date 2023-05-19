import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';

// modules
import { CardModule } from './entity/card/module/card.module';
import { ActionCardModule } from './entity/card/components/action/module/action-card.module'; 


@NgModule({
  declarations: [
    LoginComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CardModule,
    ActionCardModule
  ],
  providers: [],
  bootstrap: [
    MainComponent
  ]
})
export class AppModule { }
