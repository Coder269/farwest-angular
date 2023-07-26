import { User } from '../Models/User';

export interface Colonie {
  colonyName: String;
  colonyPicture: String;
  user: User;
  lastStrike: Date;
  woodLastRecolt: Date;
  goldLastRecolt: Date;
  ironLastRecolt: Date;
}
