import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { User } from 'src/app/Models/User';
import { Ressources } from 'src/app/interfaces/ressources';
import { MoneyService } from 'src/app/services/money.service';
import { RessourceService } from 'src/app/services/ressource.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-ressource-modal',
  templateUrl: './ressource-modal.component.html',
  styleUrls: ['./ressource-modal.component.css'],
})
export class RessourceModalComponent implements OnInit {


  @Input() resource!: Ressources;


  public isVisible = false;
  public type?: string;
  public qtyToSell!: Array<number>
  public prices!: Array<number>
  private user!: User;



  constructor(public moneyService: MoneyService, private userService: UserService, private ressourceService: RessourceService, private route: Router) {

  }

  ngOnInit(): void {
    if (localStorage.getItem('userName')) {
      this.userService.getUserInfo(localStorage.getItem('userName'), (response: User) => this.user = response)
    }
    this.qtyToSell = [0, 0, 0]
    this.prices = [0, 0, 0]

  }

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

  sell() {
    let userId = localStorage.getItem("userId")
    console.log(this.type);
    if (userId && this.user.money && this.resource.id) {
      switch (this.type) {
        case "Wood":
          if (this.resource.wood >= this.qtyToSell[0]) {
            this.userService.updateMoney(parseInt(userId), this.user.money + this.prices[0], () => { })
            this.ressourceService.updateWood(this.resource.id, this.resource.wood - this.qtyToSell[0], () => { })
            this.route.navigate(['/colonie/' + this.resource.colony?.id])
          }

          break;
        case "Iron":
          if (this.resource.iron >= this.qtyToSell[1]) {
            this.userService.updateMoney(parseInt(userId), this.user.money + this.prices[1], () => { })
            this.ressourceService.updateIron(this.resource.id, this.resource.iron - this.qtyToSell[1], () => { })
            this.route.navigate(['/colonie/' + this.resource.colony?.id])
          }

          break;
        case "Gold":
          if (this.resource.gold >= this.qtyToSell[2]) {
            this.userService.updateMoney(parseInt(userId), this.user.money + this.prices[2], () => { })
            this.ressourceService.updateGold(this.resource.id, this.resource.gold - this.qtyToSell[2], () => { })
            this.route.navigate(['/colonie/' + this.resource.colony?.id])
          }


          break;

      }
    }

  }

}
