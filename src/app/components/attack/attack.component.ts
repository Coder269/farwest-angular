import { Component, OnInit } from '@angular/core';
import { ColonyService } from 'src/app/services/colony.service';
import { ActivatedRoute } from '@angular/router';
import { Ressources } from 'src/app/interfaces/ressources';
import { Colonie } from 'src/app/interfaces/colonie';
import { User } from 'src/app/Models/User';

@Component({
  selector: 'app-attack',
  templateUrl: './attack.component.html',
  styleUrls: ['./attack.component.css'],
})
export class AttackComponent implements OnInit {
  colonyId: number = 0;
  otherColonies: Colonie[] = [];
  colonyName: string = '';
  colonyImageUrl: string = '';

  public colonie!: Colonie;
  public ressource!: Ressources;
  public user!: User;
  public money?: number | null;

  constructor(
    private colonyService: ColonyService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.colonyId = parseInt(this.route.snapshot.params['id']);
    this.otherColonies = this.colonyService.otherColonies;
    for (let colony of this.otherColonies) {
      if (colony.id === this.colonyId) {
        if (colony.colonyName) this.colonyName = colony.colonyName;
        if (colony.colonyPicture) this.colonyImageUrl = colony.colonyPicture;
      }
    }
  }
}
