import { Component, OnInit } from '@angular/core';
import { ResourcesService } from '../services/resources.service';

@Component({
  selector: 'app-gold',
  templateUrl: './gold.component.html',
  styleUrls: ['./gold.component.css']
})
export class GoldComponent implements OnInit  {

  
  gold!: number;
  argent!:number;
  constructor(private resourcesService:ResourcesService) {
    
  }
  getData(){
    this.gold=this.resourcesService.getGold();
    this.argent =this.resourcesService.getArgentGold();
  }

  sellGold()
  {
    this.resourcesService.sellGold();
    this.getData();
  }

  ngOnInit(): void {
    this.getData();
  }
}
