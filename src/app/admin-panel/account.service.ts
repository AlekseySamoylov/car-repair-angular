import { Account } from './account.model';
import {Role} from './role.enum';
import {LoggingService} from '../utils/logging.service';
import {Injectable} from '@angular/core';

@Injectable()
export class AccountService {
  accounts = [
    new Account(1, 'Vasya', Role.USER),
    new Account(2, 'Petya', Role.MANAGER),
    new Account(3, 'Ivan', Role.ADMIN)
  ];

  constructor(private loggingService: LoggingService) {}

  addOne(account: Account) {
    this.loggingService.debug('Hello pushed acc ' + account);
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
