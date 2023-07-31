import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
  ) { }

  public loginError: boolean = false;
  public submited: boolean = false;
  public loginForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  public onSubmit(event: Event) {
    event.preventDefault();
    this.submited = true;
    fetch('http://localhost:8080/login', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(this.loginForm.value),
    }).then((response) => {
      if (response.status == 200) {
        let username = this.loginForm.value.username;
        let userInfo: User;
        if (username) {
          this.userService.getUserInfo(username, (response: User) => {
            userInfo = response;
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userName', userInfo.username);
            localStorage.setItem(
              'userId',
              userInfo.id?.toString() ? userInfo.id?.toString() : ''
            );
          });
          this.userService.getUserInfo(username, (response: User) => {
            if (response.avatar == null) {
              this.router.navigate(['/create-colony']);
            }
            else {
              this.router.navigate(['/main'])
            }
          })

        }





      } else {
        this.loginError = true;
      }
    });
  }
}
