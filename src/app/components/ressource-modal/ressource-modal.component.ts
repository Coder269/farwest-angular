import { Component, Inject, Input } from '@angular/core';
import { Ressources } from 'src/app/interfaces/ressources';
import { MoneyService } from 'src/app/services/money.service';


@Component({
  selector: 'app-ressource-modal',
  templateUrl: './ressource-modal.component.html',
  styleUrls: ['./ressource-modal.component.css'],
})
export class RessourceModalComponent {
  constructor(private moneyService: MoneyService) {
    this.moneyService = moneyService
  }

  @Input() resource: Ressources = { wood: 0, iron: 0, gold: 0, numberOfCowboy: 0 };
  public sellWoodQty = 0;


  public isVisible = false;
  public type?: string;


  openModal() {
    this.isVisible = true;
  }

  closeModal() {
    this.isVisible = false;
  }
}
