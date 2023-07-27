import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { User } from '../Models/User';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

const API_URL = environment.baseApiUrl;

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) { }

  public getUserInfo(username: string | null, callback: Function): void {
    this.httpClient.get<User>(API_URL + `user-info/${username}`).subscribe({
      next: response => {
        callback(response)
      },
    })
  }
  public updateUser(user: User): void {
    this.httpClient.put<User>(API_URL + `update-user`, user).subscribe({ next: () => { } })
  }
}
