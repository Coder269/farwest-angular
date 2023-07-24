import { Component } from '@angular/core';
import { Colony } from '../create-colony/create-colony.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
 public avatar = "../../assets/cowboy1.png"
 public colonyList = [new Colony("Downtown valley", "", 3)]
}
