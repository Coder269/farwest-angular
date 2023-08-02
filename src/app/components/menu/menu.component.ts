import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/User';
import { Ressources } from 'src/app/interfaces/ressources';
import { Services } from 'src/app/services/Services';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  public isMenuVisible = false;
  @Input() public currentUser!: User;

  constructor(
    public service: Services,
    public router: Router,
    private userService: UserService
  ) { }

  public toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }

  ngOnInit(): void {
    let username = localStorage.getItem('userName');
    this.userService.getUserInfo(
      username,
      (response: User) => (this.currentUser = response)
    );
  }

  public getAvatar() {
    return this.currentUser?.avatar;
  }

  public getLevel() {
    return this.currentUser?.level;
  }

  public getMoney() {
    return this.currentUser?.money;
  }

  public logOut() {
    localStorage.setItem('isLoggedIn', 'false');
    this.router.navigate(['/login']);
  }
}
