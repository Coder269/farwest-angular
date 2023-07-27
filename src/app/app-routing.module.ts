import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalComponent } from './modal/modal.component';
import { ModalMineComponent } from './modal-mine/modal-mine.component';
import { ModalForgeComponent } from './modal-forge/modal-forge.component';
import { ModalResultLostComponent } from './modal-result-lost/modal-result-lost.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { CreateColonyComponent } from './components/create-colony/create-colony.component';
import { LostPasswordComponent } from './components/lost-password/lost-password.component';
import { MainComponent } from './components/main/main.component';
import { MenuComponent } from './components/menu/menu.component';
import { ContactComponent } from './components/contact/contact.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { ColonieComponent } from './components/colonie/colonie.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'create-colony',
    component: CreateColonyComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'modal',
    component: ModalComponent
  },
  {
    path: 'modal-mine',
    component: ModalMineComponent
  },
  {
    path: 'modal-result-lost',
    component: ModalResultLostComponent
  },
  {
    path: 'modal-forge',
    component: ModalForgeComponent
  },
  {
    path: '',
    redirectTo: '/contact',
    pathMatch: 'full'
  },
  {
    path: 'lost-password',
    component: LostPasswordComponent,
  },
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: 'menu',
    component: MenuComponent,
  },
  {
    path: 'ranking',
    component: RankingComponent,
  },
  {
    path: 'colonie',
    component: ColonieComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
