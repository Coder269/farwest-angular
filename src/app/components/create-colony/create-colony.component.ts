import { Component } from '@angular/core';

@Component({
  selector: 'app-create-colony',
  templateUrl: './create-colony.component.html',
  styleUrls: ['./create-colony.component.css'],
})
export class CreateColonyComponent {
  public colonyList = [
    new Colony('colony 1', '../../assets/village1.jpg',10),
    new Colony('colony 2', '../../assets/village2.jpg',10),
    new Colony('colony 3', '../../assets/village3.jpg',10),
    new Colony('colony 4', '../../assets/village4.jpg',10),
    new Colony('colony 5', '../../assets/village5.jpg',10),
    new Colony('colony 6', '../../assets/village6.jpg',10),
    new Colony('colony 7', '../../assets/village7.jpg',10),
  ];
  public avatarList = [
    '../../assets/cowboy1.png',
    '../../assets/cowgirl1.png',
    '../../assets/cowboy2.png',
    '../../assets/cowgirl2.png',
    '../../assets/cowboy3.png',
    '../../assets/cowgirl3.png',
    '../../assets/cowboy4.png',
    '../../assets/cowboy5.png',
  ];
}

export class Colony {
  public colonyName!: string;
  public colonyPicture!: string;
  public cowboyLeft!:number;
  constructor(colonyName: string, colonyPicture: string, cowboyLeft: number) {
    this.colonyName = colonyName;
    this.colonyPicture = colonyPicture;
    this.cowboyLeft=cowboyLeft;
  }
}
