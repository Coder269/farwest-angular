import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { CreateColonyComponent } from './create-colony/create-colony.component';
import { ModalComponent } from './modal/modal.component';

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
