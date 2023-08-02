import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Ressources } from '../interfaces/ressources';
import { Observable } from 'rxjs';

const API_URL = environment.baseApiUrl;

@Injectable({
  providedIn: 'root',
})
export class RessourceService {
  private tools = {
    sawMill: {
      returnProductivity(level: number) {
        return level
      },
      returnLvlUpCost(level: number) {
        return Math.exp(level)
      },
      lvlUp(level: number, ressource: Ressources) {
        let ressourceService!: RessourceService;
        if (ressource.id) {
          ressourceService.updateSawmill(ressource.id, level + 1)
        }
      }
    },
    forge: {
      returnProductivity(level: number) {
        return level
      },
      returnLvlUpCost(level: number) {
        return 5 * Math.exp(level)
      },
      lvlUp(level: number, ressource: Ressources) {
        let ressourceService!: RessourceService;
        if (ressource.id) {
          ressourceService.updateSawmill(ressource.id, level + 1)
        }
      }
    },
    mine: {
      returnProductivity(level: number) {
        return level
      },
      returnLvlUpCost(level: number) {
        return 10 * Math.exp(level)
      },
      lvlUp(level: number, ressource: Ressources) {
        let ressourceService!: RessourceService;
        if (ressource.id) {
          ressourceService.updateSawmill(ressource.id, level + 1)
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
