import { Component, OnInit } from '@angular/core';
import { Colonie } from 'src/app/interfaces/colonie';
import { Services } from 'src/app/services/Services';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/Models/User';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { ColonyService } from 'src/app/services/colony.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-colony',
  templateUrl: './create-colony.component.html',
  styleUrls: ['./create-colony.component.css'],
})
export class CreateColonyComponent implements OnInit {
  private userInfo?: User | undefined;
  constructor(public service: Services, private userService: UserService, private colonyService: ColonyService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.userService.getUserInfo(localStorage.getItem('userName'), (response: User) => this.userInfo = response)
  }

  public form = this.formBuilder.group({
    colonyName: ['', Validators.required],
    colonyPicture: ['', Validators.required],
    userPicture: ['', Validators.required]
  })

  public onSubmit(event: Event) {
    event.preventDefault();
    let user: User;
    this.userService.getUserInfo(localStorage.getItem('userName'), (response: User) => {
      user = response
      user.avatar = this.form.value.userPicture;
      console.log(user)
      this.userService.updateUser(user, () => { });
    })

    let colonie: Colonie;
    colonie = { colonyName: this.form.value.colonyName, colonyPicture: this.form.value.colonyPicture, user: this.userInfo }
    this.colonyService.createColony(colonie, () => { this.router.navigate(['/main']) });

  }


}
