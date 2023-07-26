import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Services } from 'src/app/services/Services';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  private avatar = "../../assets/cowboy1.png"
  private level = 15;
  private money = 750;
  constructor(public service: Services, public router: Router) { }

  public getAvatar() {
    return this.avatar
  }
  public getLevel() {
    return this.level
  }
  public getMoney() {
    return this.money
  }

  public logOut() {
    localStorage.setItem('isLoggedIn', 'false');
    this.router.navigate(['/login'])
  }

}
