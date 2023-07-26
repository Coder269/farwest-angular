import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { CreateColonyComponent } from './create-colony/create-colony.component';
import { ModalComponent } from './modal/modal.component';
import { ModalMineComponent } from './modal-mine/modal-mine.component';
import { ModalForgeComponent } from './modal-forge/modal-forge.component';

const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'register',
    component: RegisterComponent
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
    path: 'modal-forge',
    component: ModalForgeComponent
  },
  {
    path: '',
    redirectTo: '/contact',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
