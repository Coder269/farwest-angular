import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private formBuilder: FormBuilder, private router: Router) {}

  public loginError: boolean = false;
  public submited: boolean = false;
  loginForm = this.formBuilder.group({
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
      console.log(response);
      if (response.status == 200) {
        localStorage.setItem('isLoggedIn', 'true');
        this.router.navigate(['/menu']);
      } else {
        localStorage.setItem('isLoggedIn', 'false');
        this.loginError = true;
      }
    });
  }
}
