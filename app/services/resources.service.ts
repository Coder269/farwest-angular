import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

  constructor() { }
  wood:number = 1000;
  gold:number = 1000;
  iron:number = 1000;

  argentWood:number = 450;
  argentIron:number = 900;
  argentGold:number = 1800;

  getWood()
  {
    return this.wood;
  }
  
  getIron()
  {
    return this.iron;
  }
  
  getGold()
  {
    return this.gold;
  }


  getArgentWood()
  {
    return this.argentWood;
  }
  
  getArgentIron()
  {
    return this.argentIron;
  }
 
  getArgentGold()
  {
    return this.argentGold;
  }

  sellWood()
  {
    if(this.wood<7000){
    this.wood += 1000;
    this.argentWood += 450;
    }
  }


  sellIron()
  {
    if(this.iron<7000)
    {
    this.iron += 1000;
    this.argentIron += 900;
    }    
  }


  sellGold()
  {
    if(this.gold<7000)
{
    this.gold += 1000;
    this.argentGold += 1800;
  }  
}
}
