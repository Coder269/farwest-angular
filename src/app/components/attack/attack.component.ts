import { Component, OnInit } from '@angular/core';
import { ColonyService } from 'src/app/services/colony.service';
import { ActivatedRoute } from '@angular/router';
import { RessourceService } from 'src/app/services/ressource.service';
import { Ressources } from 'src/app/interfaces/ressources';
import { Colonie } from 'src/app/interfaces/colonie';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/Models/User';

@Component({
  selector: 'app-attack',
  templateUrl: './attack.component.html',
  styleUrls: ['./attack.component.css'],
})
export class AttackComponent implements OnInit {
  public colonie!: Colonie;
  public ressource!: Ressources;
  public user!: User;
  public money?: number | null;

  constructor(
    private userService: UserService,
    private colonyService: ColonyService,
    private ressourceService: RessourceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let colonyId = this.route.snapshot.paramMap.get('id');
    if (colonyId) {
      this.userService.getUserInfo(
        localStorage.getItem('money'),
        (response: User) => {
          this.money = response.money;
        }
      );

      this.colonyService.getColonieById(
        parseInt(colonyId),
        (response: Colonie) => (this.colonie = response)
      );
      this.ressourceService.getRessourceOfColony(
        parseInt(colonyId),
        (response: Ressources) => {
          this.ressource = response;
        }
      );
    }
  }
}
