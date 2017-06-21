import { Account } from './account.model';
import {Role} from './role.enum';
import {LoggingService} from '../utils/logging.service';
import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class AccountService {
  accounts = [
    new Account(1, 'Vasya', Role.USER),
    new Account(2, 'Petya', Role.MANAGER),
    new Account(3, 'Ivan', Role.ADMIN)
  ];
  roleUpdated = new EventEmitter<Role>();

  constructor(private loggingService: LoggingService) {
  }

  addOne(account: Account) {
    this.loggingService.debug('Hello pushed acc ' + account);
    this.accounts.push(account);
  }


  updateRole(id: number, role: Role) {
    for (const entryAccount of this.accounts) {
      if (entryAccount.id === id) {
        entryAccount.role = role;
      }
    }
  }

  getNewId() {
    let size = this.accounts.length;
    return ++size;
  }
}
