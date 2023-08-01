import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoneyService {
  private wood = 1;
  private iron = 2;
  private gold = 5;
  private cowboy = { 1: 50, 5: 200, 10: 350 }
  constructor() {

  }

  public getWood() {
    return this.wood;
  }
  public getIron() {
    return this.iron;
  }
  public getGold() {
    return this.gold;
  }
  public getCowboy() {
    return this.cowboy;
  }
}
