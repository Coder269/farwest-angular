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
  constructor(private httpClient: HttpClient) {}

  public createRessource(ressource: Ressources): Observable<Ressources> {
    return this.httpClient.post<Ressources>(
      API_URL + 'create-ressource',
      ressource
    );
  }

  public getRessourceOfColony(colonyId: number): Observable<Ressources> {
    return this.httpClient.get<Ressources>(
      API_URL + `get-ressource/${colonyId}`
    );
  }

  public updateCowboys(
    ressourceId: number,
    nbCowBoys: number
  ): Observable<any> {
    return this.httpClient.put(
      API_URL + `update-cowboy/${ressourceId}`,
      nbCowBoys
    );
  }

  public updateWood(ressourceId: number, nbWood: number): Observable<any> {
    return this.httpClient.put(API_URL + `update-wood/${ressourceId}`, nbWood);
  }

  public updateIron(ressourceId: number, nbIron: number): Observable<any> {
    return this.httpClient.put(API_URL + `update-iron/${ressourceId}`, nbIron);
  }

  public updateGold(ressourceId: number, nbGold: number): Observable<any> {
    return this.httpClient.put(API_URL + `update-gold/${ressourceId}`, nbGold);
  }

  public updateSawmill(
    ressourceId: number,
    nbSawmill: number
  ): Observable<any> {
    return this.httpClient.put(
      API_URL + `update-sawmill/${ressourceId}`,
      nbSawmill
    );
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
}
