import { Colonie } from '../interfaces/colonie';

export class User {
  id?: number;
  colonies?: Colonie[];
  username: string;
  password: string;
  avatar: string | null | undefined;
  money: number;
  level: number;

  constructor(
    username: string,
    password: string,
    avatar: string,
    money: number,
    level: number
  ) {
    this.username = username;
    this.password = password;
    this.avatar = avatar;
    this.money = money;
    this.level = level;
  }
}
