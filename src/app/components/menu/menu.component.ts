import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  private avatar = "../../assets/cowboy1.png"
  private level = 15;
  private money = 750;

  public getAvatar() {
    return this.avatar
  }
  public getLevel() {
    return this.level
  }
  public getMoney() {
    return this.money
  }
}