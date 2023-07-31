import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/User';
import { Colonie } from 'src/app/interfaces/colonie';
import { Services } from 'src/app/services/Services';
import { ColonyService } from 'src/app/services/colony.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {


  public avatar?: string | null;
  public colonyList?: Array<Colonie>


  constructor(private service: Services, private userService: UserService, private colonyService: ColonyService) { }

  ngOnInit(): void {
    this.userService.getUserInfo(localStorage.getItem('userName'), (response: User) => { this.avatar = response.avatar })
    this.colonyService.getColoniesOfUser(parseInt(localStorage.getItem('userId')!), (response: Array<Colonie>) => {
      this.colonyList = response
      console.log(this.colonyList)
    })


  }
}
