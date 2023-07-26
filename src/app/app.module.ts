import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { CreateColonyComponent } from './create-colony/create-colony.component';
import { ContactComponent } from './contact/contact.component';
import { ModalComponent } from './modal/modal.component';
import { ModalMineComponent } from './modal-mine/modal-mine.component';
import { ModalForgeComponent } from './modal-forge/modal-forge.component';
import { ModalResultLostComponent } from './modal-result-lost/modal-result-lost.component';
=======
import { CreateColonyComponent } from './components/create-colony/create-colony.component';
import { LoginComponent } from './components/login/login.component';
import { LostPasswordComponent } from './components/lost-password/lost-password.component';
import { MainComponent } from './components/main/main.component';
import { MenuComponent } from './components/menu/menu.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { ContactComponent } from './components/contact/contact.component';
import { ColonieComponent } from './components/colonie/colonie.component';
import { ReactiveFormsModule } from '@angular/forms';
>>>>>>> dev


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    CreateColonyComponent,
<<<<<<< HEAD
    ContactComponent,
    ModalComponent,
    ModalMineComponent,
    ModalForgeComponent,
    ModalResultLostComponent,
    
=======
    LoginComponent,
    LostPasswordComponent,
    MainComponent,
    MenuComponent,
    RankingComponent,
    ContactComponent,
    ColonieComponent,
>>>>>>> dev
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
