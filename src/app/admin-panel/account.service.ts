import { Account } from './account.model';
import {Role} from './role.enum';

export class AccountService {
  accounts = [
    new Account(1, 'Vasya', Role.USER),
    new Account(2, 'Petya', Role.MANAGER),
    new Account(3, 'Ivan', Role.ADMIN)
  ];

  addOne(account: Account) {
    console.log('Hello pushed acc ' + account);
    this.accounts.push(account);
  }

  updateOne(account: Account) {
    for (let entryAccount of this.accounts) {
      if (entryAccount.id === account.id) {
        entryAccount = account;
      }
    }
  }
}
