import { Component, OnInit } from '@angular/core';
import { Colonie } from 'src/app/interfaces/colonie';
import { Services } from 'src/app/services/Services';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/Models/User';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { ColonyService } from 'src/app/services/colony.service';
import { Router } from '@angular/router';
import { RessourceService } from 'src/app/services/ressource.service';
import { Ressources } from 'src/app/interfaces/ressources';

@Component({
  selector: 'app-create-colony',
  templateUrl: './create-colony.component.html',
  styleUrls: ['./create-colony.component.css'],
})
export class CreateColonyComponent implements OnInit {
  private userInfo?: User | undefined;
  constructor(public service: Services, private userService: UserService, private colonyService: ColonyService, private ressourceService: RessourceService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.userService.getUserInfo(localStorage.getItem('userName'), (response: User) => {
      this.userInfo = response
      if (response.avatar != null) {
        this.router.navigate(['main'])
      }
    })
  }

  public form = this.formBuilder.group({
    colonyName: ['', Validators.required],
    colonyPicture: ['', Validators.required],
    userPicture: ['', Validators.required]
  })

  public onSubmit(event: Event) {
    event.preventDefault();
    // let user: User;
    // this.userService.getUserInfo(localStorage.getItem('userName'), (response: User) => {
    //   user = response
    //   user.avatar = this.form.value.userPicture;
    //   this.userService.updateUser(user, () => { });
    // })
    if (this.userInfo) {
      this.userInfo.avatar = this.form.value.userPicture;
      this.userService.updateUser(this.userInfo, () => { });
    }


    let colonie: Colonie;
    colonie = { colonyName: this.form.value.colonyName, colonyPicture: this.form.value.colonyPicture, user: this.userInfo, goldLastRecolt: new Date().getTime(), ironLastRecolt: new Date().getTime(), woodLastRecolt: new Date().getTime(), lastStrike: new Date().getTime() }
    this.colonyService.createColony(colonie, (response: Colonie) => {

      let ressource: Ressources = { wood: 0, iron: 0, gold: 0, sawMill: 1, mine: 1, forge: 1 };
      if (response.id != null) {
        ressource.colony = response;
      }
      this.ressourceService.createRessource(ressource, () => { })
      this.router.navigate(['/main'])
    });

  }


}
