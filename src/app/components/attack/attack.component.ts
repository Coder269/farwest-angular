import { Component } from '@angular/core';
import { ColonyService } from 'src/app/services/colony.service';
import { ActivatedRoute } from '@angular/router';
import { RessourceService } from 'src/app/services/ressource.service';
import { Ressources } from 'src/app/interfaces/ressources';
import { Colonie } from 'src/app/interfaces/colonie';

@Component({
  selector: 'app-attack',
  templateUrl: './attack.component.html',
  styleUrls: ['./attack.component.css'],
})
export class AttackComponent {
  public colonie!: Colonie;
  public ressource!: Ressources;

  constructor(
    private colonyService: ColonyService,
    private ressourceService: RessourceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let colonyId = this.route.snapshot.paramMap.get('id');
    if (colonyId) {
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
