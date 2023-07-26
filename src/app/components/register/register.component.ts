import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private formBuilder: FormBuilder, private router: Router) {}

  public registerError: boolean = false;
  public submited: boolean = false;

  registerForm = this.formBuilder.group({
    username: [
      '',
      [Validators.required, Validators.minLength(4), Validators.maxLength(15)],
    ],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    cpassword: ['', [Validators.required]],
  });

  public addUser(event: Event) {
    event.preventDefault();
    this.submited = true;
    console.log(this.registerForm.value);

    fetch('http://localhost:8080/register', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.registerForm.value),
    }).then((response) => {
      console.log(response);
      if (response.status == 200) {
        localStorage.setItem('User created', 'true');
        this.router.navigate(['/create-colony']);
      } else {
        localStorage.setItem('User not created', 'false');
        this.registerError = true;
      }
    });
  }
}
