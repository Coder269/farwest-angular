import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerForm = this.formBuilder.group({
    username: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    cpassword: ['', [Validators.required]],
  });

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  onSubmit(event: Event) {
    event.preventDefault();
    this.addUser();
  }

  public addUser() {
    console.log(this.registerForm.value);

    fetch('http://localhost:8080/register', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.registerForm.value),
    }).then((response) => {
      if (response.status == 200) {
        this.router.navigate(['/login']);
      }
    });
  }
}
