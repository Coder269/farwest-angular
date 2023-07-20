import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'; // CLI imports AppRoutingModule
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { Router } from '@angular/router';
import { CreateColonyComponent } from './create-colony/create-colony.component';
import { GoldComponent } from './gold/gold.component';
import { WoodComponent } from './wood/wood.component';
import { IronComponent } from './iron/iron.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    CreateColonyComponent,
    GoldComponent,
    WoodComponent,
    IronComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }