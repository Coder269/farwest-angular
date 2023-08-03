import { Component } from '@angular/core';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css'],
})
export class RankingComponent {
  private bestPlayer = [
    'Marco',
    'Lucas',
    'Jean-Jérome',
    'Marie-Odile',
    'Cunégonde',
    'Lionel',
    'Jacquouille',
    'Patrick',
    'Ursule',
    'Mathew',
  ];
  private restPlayer = this.bestPlayer.slice(3);

  public getBestPlayer() {
    return this.bestPlayer;
  }

  public getRestPlayer() {
    return this.restPlayer;
  }
}
