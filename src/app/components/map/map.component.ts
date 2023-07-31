
import { Component, OnInit } from '@angular/core';
import { Colonie } from 'src/app/interfaces/colonie';
import { Services } from 'src/app/services/Services';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  randomColonies: Colonie[] = [];

  constructor(private service: Services) {}

  ngOnInit() {
    this.randomColonies = this.service.getRandomColonies(9); //nombre de colonies à afficher
  }
}
