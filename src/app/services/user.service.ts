import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { User } from '../Models/User';
import { Observable } from 'rxjs';

const API_URL = environment.baseApiUrl;

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  public getUserInfo(username: string | null, callback: Function): void {
    this.httpClient.get<User>(API_URL + `user-info/${username}`).subscribe({
      next: (response) => {
        callback(response);
      },
    });
  }

  public updateLevel(userId: number, level: number): Observable<any> {
    return this.httpClient.put(API_URL + `update-level/${userId}`, level);
  }

  public updateMoney(userId: number, money: number): Observable<any> {
    return this.httpClient.put(API_URL + `update-money/${userId}`, money);
  }

  public updateUser(newUser: User, callback: Function): void {
    this.httpClient.put<User>(API_URL + 'update-user', newUser).subscribe({
      next: (response) => {
        callback(response);
      },
    });
  }
}
