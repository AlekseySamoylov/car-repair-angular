import {Role} from './role.enum';
export class Account {
  id: number;
  username: string;
  role: Role;

  constructor(id: number, username: string, role: Role) {
    this.id = id;
    this.username = username;
    this.role = role;
  }

  toString() {
    return 'Account ' + this.username + ' ' + this.role;
  }
}
