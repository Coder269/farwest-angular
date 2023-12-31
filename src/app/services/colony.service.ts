import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Colonie } from '../interfaces/colonie';

const API_URL = environment.baseApiUrl;

@Injectable({
  providedIn: 'root',
})
export class ColonyService {
  otherColonies: Colonie[] = [];

  constructor(private httpClient: HttpClient) { }

  public getAllColonies(): Observable<Colonie[]> {
    return this.httpClient.get<Colonie[]>(API_URL + 'all-colonies');
  }

  public createColony(colony: Colonie, callback: Function): void {
    this.httpClient.post<Colonie>(API_URL + 'create-colony', colony).subscribe({
      next: (response) => callback(response),
    });
  }

  public updateColony(colony: Colonie, callback: Function): void {
    this.httpClient.put<Colonie>(API_URL + 'update-colony', colony).subscribe({ next: (response) => callback(response) });
  }

  public deleteColony(id: number): Observable<any> {
    return this.httpClient.delete(API_URL + `delete-colony/${id}`);
  }

  public getColoniesOfUser(id: number, callback: Function) {
    return this.httpClient
      .get<Colonie[]>(API_URL + `colonies-user/${id}`)
      .subscribe({ next: (response: Colonie[]) => callback(response) });
  }

  public getColonieById(id: number, callback: Function) {
    this.httpClient
      .get<Colonie>(API_URL + `colony/${id}`)
      .subscribe({ next: (response: Colonie) => callback(response) });
  }
}
