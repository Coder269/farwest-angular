import { User } from '../Models/User';

export interface Colonie {
  id?: number;
  colonyName?: string | null | undefined;
  colonyPicture?: string | null | undefined;
  user?: User | undefined;
  lastStrike?: Date;
  woodLastRecolt?: Date;
  goldLastRecolt?: Date;
  ironLastRecolt?: Date;
}
