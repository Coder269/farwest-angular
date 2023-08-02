import { Component, OnInit } from '@angular/core';
import { ColonyService } from 'src/app/services/colony.service';
import { ActivatedRoute } from '@angular/router';
import { Colonie } from 'src/app/interfaces/colonie';

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
