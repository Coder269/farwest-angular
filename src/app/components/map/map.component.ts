import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Colonie } from 'src/app/interfaces/colonie';
import { ColonyService } from 'src/app/services/colony.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  allColonies: Colonie[] = [];
  coloniesUser: Colonie[] = [];
  otherColonies: Colonie[] = [];
  isLoading: boolean = false;

  constructor(private colonyService: ColonyService, private router: Router) {}

  ngOnInit() {
    this.colonyService.getAllColonies().subscribe({
      next: (response: Colonie[]) => {
        this.allColonies = response;
        this.getColoniesOfUser();
      },
      error: (error: HttpErrorResponse) => console.log(error.message),
    });
  }

  getColoniesOfUser() {
    const userId = localStorage.getItem('userId');

    if (userId)
      this.colonyService.getColoniesOfUser(
        parseInt(userId),
        (response: Colonie[]) => {
          this.coloniesUser = response;
          this.getOtherColonies();
        }
      );
  }

  getOtherColonies() {
    this.otherColonies = this.allColonies;
    for (let colony of this.coloniesUser) {
      this.otherColonies = this.otherColonies.filter(
        (colony2) => colony.id != colony2.id
      );
    }
    this.colonyService.otherColonies = this.otherColonies;
  }

  onLoading(colonyId: number | undefined) {
    this.isLoading = true;
    setTimeout(() => {
      this.router.navigate(['/attack', colonyId]);
    }, 3000);
  }
}
