import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Colonie } from 'src/app/interfaces/colonie';
import { ColonyService } from 'src/app/services/colony.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  colonies: Colonie[] = [];

  constructor(private colonyService: ColonyService) {}

  ngOnInit() {
    this.colonyService.getAllColonies().subscribe({
      next: (response: Colonie[]) => (this.colonies = response),
      error: (error: HttpErrorResponse) => console.log(error.message),
    });
  }
}
