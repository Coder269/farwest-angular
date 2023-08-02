import { User } from '../Models/User';

export interface Colonie {
  id?: number;
  colonyName?: string | null | undefined;
  colonyPicture?: string | null | undefined;
  user?: User | undefined;
  lastStrike: number;
  woodLastRecolt: number;
  goldLastRecolt: number;
  ironLastRecolt: number;
}
