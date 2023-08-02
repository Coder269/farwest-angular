import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoneyService {
  private wood = 1;
  private iron = 2;
  private gold = 5;
  private cowboy = {
    qty: [1, 5, 10],
    price: [50, 200, 350]
  }
  constructor() {

  }

  public getRessourcesPrices(): Array<number> {
    return [this.wood, this.iron, this.gold]
  }
  public getCowBoyPrices() {
    return this.cowboy
  }
}
