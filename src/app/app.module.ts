import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'; // CLI imports AppRoutingModule
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { Router } from '@angular/router';
import { CreateColonyComponent } from './components/create-colony/create-colony.component';
import { LoginComponent } from './components/login/login.component';
import { LostPasswordComponent } from './components/lost-password/lost-password.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    CreateColonyComponent,
    LoginComponent,
    LostPasswordComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
