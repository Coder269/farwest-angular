import { HttpClient, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Ressources } from '../interfaces/ressources';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

const API_URL = environment.baseApiUrl;

@Injectable({
  providedIn: 'root',
})
export class RessourceService {
  private tools = {
    sawMill: {
      returnProductivity(level: number) {
        return level * 10
      },
      returnLvlUpCost(currentLevel: number) {
        return Math.round(Math.exp(currentLevel) / 10) + 10
      },
      lvlUp(ressource: Ressources, ressourceService: RessourceService, router: Router) {
        if (ressource.id && ressourceService.exportTools().sawMill.returnLvlUpCost(ressource.sawMill) <= ressource.wood && ressource.wood > 0) {
          ressourceService.updateSawmill(ressource.id, ressource.sawMill + 1)
          ressourceService.updateWood(ressource.id, ressource.wood - this.returnLvlUpCost(ressource.sawMill), () => { })
          router.navigate(['/colonie/' + ressource.colony?.id])
        }
      }
    },
    forge: {
      returnProductivity(level: number) {
        return level * 5
      },
      returnLvlUpCost(currentLevel: number) {
        return Math.round(Math.exp(currentLevel) / 10) + 10
      },
      lvlUp(ressource: Ressources, ressourceService: RessourceService, router: Router) {
        if (ressource.id && ressourceService.exportTools().forge.returnLvlUpCost(ressource.forge) <= ressource.iron && ressource.iron > 0) {
          ressourceService.updateForge(ressource.id, ressource.forge + 1)
          ressourceService.updateIron(ressource.id, ressource.iron - this.returnLvlUpCost(ressource.forge), () => { })
          router.navigate(['/colonie/' + ressource.colony?.id])
        }
      }
    },
    mine: {
      returnProductivity(level: number) {
        return level * 2
      },
      returnLvlUpCost(currentLevel: number) {
        return Math.round(Math.exp(currentLevel) / 10) + 10
      },
      lvlUp(ressource: Ressources, ressourceService: RessourceService, router: Router) {
        if (ressource.id && ressourceService.exportTools().mine.returnLvlUpCost(ressource.mine) <= ressource.gold && ressource.gold > 0) {
          ressourceService.updateMine(ressource.id, ressource.mine + 1)
          ressourceService.updateGold(ressource.id, ressource.gold - this.returnLvlUpCost(ressource.mine), () => { })
          router.navigate(['/colonie/' + ressource.colony?.id])
        }
      }
    }
  }





  constructor(private httpClient: HttpClient) { }

  public exportTools() {
    return this.tools;
  }

  public createRessource(ressource: Ressources, callback: Function): void {
    this.httpClient.post<Ressources>(
      API_URL + 'create-ressource',
      ressource
    ).subscribe({
      next: (response: Ressources) => callback(response)
    });
  }

  public getRessourceOfColony(colonyId: number, callback: Function): void {
    this.httpClient.get<Ressources>(
      API_URL + `get-ressource/${colonyId}`
    ).subscribe({
      next: (response: Ressources) => callback(response)
    })
  }

  public updateCowboys(
    ressourceId: number,
    nbCowBoys: number,
    callback: Function
  ): void {
    this.httpClient.put(
      API_URL + `update-cowboy/${ressourceId}`,
      nbCowBoys
    ).subscribe({ next: (response) => callback(response) });
  }

  public updateWood(ressourceId: number, nbWood: number, callback: Function): void {
    this.httpClient.put(API_URL + `update-wood/${ressourceId}`, nbWood).subscribe({ next: (response) => callback(response) });
  }

  public updateIron(ressourceId: number, nbIron: number, callback: Function): void {
    this.httpClient.put(API_URL + `update-iron/${ressourceId}`, nbIron).subscribe({ next: (response) => callback(response) });
  }

  public updateGold(ressourceId: number, nbGold: number, callback: Function): void {
    this.httpClient.put(API_URL + `update-gold/${ressourceId}`, nbGold).subscribe({ next: (response) => callback(response) });
  }

  public updateSawmill(
    ressourceId: number,
    nbSawmill: number
  ): void {
    this.httpClient.put(
      API_URL + `update-sawmill/${ressourceId}`,
      nbSawmill
    ).subscribe({})
  }

  public updateForge(ressourceId: number, nbForge: number): Observable<any> {
    return this.httpClient.put(
      API_URL + `update-forge/${ressourceId}`,
      nbForge
    );
  }

  public updateMine(ressourceId: number, nbMine: number): Observable<any> {
    return this.httpClient.put(API_URL + `update-mine/${ressourceId}`, nbMine);
  }

  public updateRessources(ressource: Ressources, callback: Function): void {
    this.httpClient.put(API_URL + "update-ressource/", ressource).subscribe({ next: (response) => callback(response) })
  }
}
