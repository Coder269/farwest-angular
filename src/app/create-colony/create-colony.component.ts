import { Component } from '@angular/core';

@Component({
  selector: 'app-create-colony',
  templateUrl: './create-colony.component.html',
  styleUrls: ['./create-colony.component.css']
})



export class CreateColonyComponent {
  public colonyList = [
    new Colony("colony 1", "../../assets/village1.jpg"),
    new Colony("colony 2", "../../assets/village2.jpg"),
    new Colony("colony 3", "../../assets/village3.jpg"),
    new Colony("colony 4", "../../assets/village4.jpg"),
    new Colony("colony 5", "../../assets/village5.jpg"),
    new Colony("colony 6", "../../assets/village6.jpg"),
    new Colony("colony 7", "../../assets/village7.jpg")
  ]
  public avatarList=[
    "../../assets/cowboy1.png",
    "../../assets/cowgirl1.png",
    "../../assets/cowboy2.png",
    "../../assets/cowgirl2.png",
    "../../assets/cowboy3.png",
    "../../assets/cowgirl3.png",
    "../../assets/cowboy4.png",
    "../../assets/cowboy5.png"
  ]

}

class Colony{
  public colonyName!:string;
  public colonyPicture!:string;
  constructor(colonyName:string, colonyPicture:string){
    this.colonyName=colonyName;
    this.colonyPicture=colonyPicture;
  }
}