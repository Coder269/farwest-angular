import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { Router } from '@angular/router';
import { CreateColonyComponent } from './components/create-colony/create-colony.component';
import { LoginComponent } from './components/login/login.component';
import { LostPasswordComponent } from './components/lost-password/lost-password.component';
import { MainComponent } from './components/main/main.component';
import { MenuComponent } from './components/menu/menu.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { ContactComponent } from './components/contact/contact.component';
import { ColonieComponent } from './components/colonie/colonie.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MiniMenuComponent } from './components/mini-menu/mini-menu.component';
import { MapComponent } from './components/map/map.component';
import { AttackComponent } from './components/attack/attack.component';
import { EquipmentsModalComponent } from './components/equipments-modal/equipments-modal.component';
import { RessourceModalComponent } from './components/ressource-modal/ressource-modal.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ResultModalComponent } from './components/result-modal/result-modal.component';
import { Loader2Component } from './components/loader2/loader2.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    CreateColonyComponent,
    LoginComponent,
    LostPasswordComponent,
    MainComponent,
    MenuComponent,
    RankingComponent,
    ContactComponent,
    ColonieComponent,
    MiniMenuComponent,
    MapComponent,
    AttackComponent,
    EquipmentsModalComponent,
    RessourceModalComponent,
    LoaderComponent,
    ResultModalComponent,
    Loader2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
