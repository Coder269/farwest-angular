import { Component } from '@angular/core';
import { ResourcesService } from '../services/resources.service';
@Component({
  selector: 'app-wood',
  templateUrl: './wood.component.html',
  styleUrls: ['./wood.component.css']
})
export class WoodComponent {

  argent! : number;
  wood! : number;

  constructor(private resourcesService:ResourcesService) {
    
  }
  getData(){
    this.wood=this.resourcesService.getWood();
    this.argent =this.resourcesService.getArgentWood();
  }

  sellWood()
  {
    this.resourcesService.sellWood();
    this.getData();
  }

  ngOnInit(): void {
    this.getData();
  }

}
