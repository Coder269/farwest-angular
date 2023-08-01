import { Component, Inject, Input } from '@angular/core';
import { Ressources } from 'src/app/interfaces/ressources';
import { MoneyService } from 'src/app/services/money.service';


@Component({
  selector: 'app-ressource-modal',
  templateUrl: './ressource-modal.component.html',
  styleUrls: ['./ressource-modal.component.css'],
})
export class RessourceModalComponent {
  constructor(public moneyService: MoneyService) {
    this.moneyService = moneyService
  }

  @Input() resource: Ressources = { wood: 0, iron: 0, gold: 0, numberOfCowboy: 0 };
  public sellWoodQty = 0;


  public isVisible = false;
  public type?: string;
  public qtyToSell = [0, 0, 0]
  public prices = [0, 0, 0]


  openModal() {
    this.isVisible = true;
  }

  closeModal() {
    this.isVisible = false;
  }
  getIsVisible() {
    return this.isVisible;
  }

  updatePrices() {
    for (let i = 0; i < this.prices.length; i++) {
      this.prices[i] = this.qtyToSell[i] * this.moneyService.getRessourcesPrices()[i]
    }
  }
}
