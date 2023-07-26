import { Component, OnInit } from '@angular/core';
import { Colonie } from 'src/app/interfaces/colonie';
import { Services } from 'src/app/services/Services';

@Component({
  selector: 'app-create-colony',
  templateUrl: './create-colony.component.html',
  styleUrls: ['./create-colony.component.css'],
})
export class CreateColonyComponent implements OnInit {

  constructor(public service: Services) { }

  ngOnInit() {

  }
}
