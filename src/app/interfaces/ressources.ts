import { Colonie } from './colonie';

export interface Ressources {
  id?: number;
  colony?: Colonie;
  numberOfCowboy?: number;
  wood: number;
  iron: number;
  gold: number;
  sawMill?: number;
  forge?: number;
  mine?: number;
}
