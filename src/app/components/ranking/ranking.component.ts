import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/User';
import { Ranking } from 'src/app/interfaces/Ranking';
import { Colonie } from 'src/app/interfaces/colonie';
import { ColonyService } from 'src/app/services/colony.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css'],
})
export class RankingComponent implements OnInit {
  firstPlayer: string = '';
  firstNbColonies: number = 0;

  secondPlayer: string = '';
  secondNbColonies: number = 0;

  thirdPlayer: string = '';
  thirsNbColonies: number = 0;

  constructor(
    private userService: UserService,
    private colonyService: ColonyService
  ) {}

  users: User[] = [];

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe({
      next: (response: User[]) => {
        this.users = response;
        this.doRanking();
      },
      error: (error: HttpErrorResponse) => console.log(error.message),
    });
  }

  doRanking() {
    let rankingsNb = Array<number>(this.users.length);
    let rankings: Ranking[] = Array<Ranking>(this.users.length);

    this.users.forEach((user, index) => {
      if (user.id) {
        rankings[index] = {
          username: '',
          nbColony: 0,
        };
        if (user.username) rankings[index].username = user.username;
        this.colonyService.getColoniesOfUser(user.id, (response: Colonie[]) => {
          rankingsNb.push(response.length);
          rankings[index].nbColony = response.length;
          this.doThreePositions(rankingsNb, rankings);
        });
      }
    });
  }

  doThreePositions(rankingsNb: Array<number>, rankings: Array<Ranking>) {
    rankingsNb.sort((a, b) => b - a);
    let topThree;
    if (rankingsNb.length === 1) topThree = rankingsNb.slice(0, 1);
    else if (rankingsNb.length === 2) topThree = rankingsNb.slice(0, 2);
    else if (rankingsNb.length >= 3) topThree = rankingsNb.slice(0, 3);
    console.log(rankings);
    this.firstPlayer = '';
    this.secondPlayer = '';
    this.thirdPlayer = '';
    for (let ranking of rankings) {
      if (
        topThree &&
        this.firstPlayer === '' &&
        ranking.nbColony === topThree[0]
      ) {
        this.firstPlayer = ranking.username;
        this.firstNbColonies = ranking.nbColony;
      }
      if (
        topThree &&
        topThree.length > 1 &&
        ranking.nbColony === topThree[1] &&
        this.secondPlayer === '' &&
        ranking.username != this.firstPlayer &&
        ranking.username != this.thirdPlayer
      ) {
        this.secondPlayer = ranking.username;
        this.secondNbColonies = ranking.nbColony;
      }
      if (
        topThree &&
        topThree.length > 2 &&
        ranking.nbColony === topThree[2] &&
        this.thirdPlayer === '' &&
        ranking.username != this.secondPlayer &&
        ranking.username != this.firstPlayer
      ) {
        this.thirdPlayer = ranking.username;
        this.thirsNbColonies = ranking.nbColony;
      }
    }
  }
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
