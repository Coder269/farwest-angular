import { Component } from '@angular/core';
import { ResourcesService } from '../services/resources.service';
@Component({
  selector: 'app-iron',
  templateUrl: './iron.component.html',
  styleUrls: ['./iron.component.css']
})
export class IronComponent {

  argent! : number;
  iron! : number;
  constructor(private resourcesService:ResourcesService) {
    
    
  }
  getData(){
    this.iron=this.resourcesService.getIron();
    this.argent=this.resourcesService.getArgentIron();   
  }

  sellIron(){
    this.resourcesService.sellIron();
    this.getData();
  }

  ngOnInit(): void {
    this.getData();
  }
 
}
