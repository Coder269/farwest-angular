import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { CreateColonyComponent } from './components/create-colony/create-colony.component';
import { LostPasswordComponent } from './components/lost-password/lost-password.component';
import { MainComponent } from './components/main/main.component';
import { MenuComponent } from './components/menu/menu.component';
import { ContactComponent } from './components/contact/contact.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { ColonieComponent } from './components/colonie/colonie.component';
import { authGuard } from './core/auth.guard';
import { MapComponent } from './components/map/map.component';

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
    component: CreateColonyComponent,
    canActivate: [authGuard],
  },
  {
    path: 'lost-password',
    component: LostPasswordComponent,
    canActivate: [authGuard],
  },
  {
    path: 'main',
    component: MainComponent,
    canActivate: [authGuard],
  },
  {
    path: 'menu',
    component: MenuComponent,
    canActivate: [authGuard],
  },
  {
    path: 'map',
    component: MapComponent,
    canActivate: [authGuard],
  },
  {
    path: 'contact',
    component: ContactComponent,
    canActivate: [authGuard],
  },
  {
    path: 'ranking',
    component: RankingComponent,
    canActivate: [authGuard],
  },
  {
    path: 'colonie/:id',
    component: ColonieComponent,
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
