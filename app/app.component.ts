import { Component } from '@angular/core';
import { IronComponent } from './iron/iron.component';
import { GoldComponent } from './gold/gold.component';
import { WoodComponent } from './wood/wood.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'farwest-angular';
}
