import { Component, OnInit } from '@angular/core';
import {AccountService} from '../account.service';
import {Account} from '../account.model';
import {Role} from '../role.enum';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: []
})
export class NewAccountComponent implements OnInit {
  private iterator: number;
  user = Role.USER;
  manager = Role.MANAGER;
  admin = Role.ADMIN;
  constructor(private accountService: AccountService) {
    this.accountService.roleUpdated.subscribe(
      (role: Role) => alert('New Role: ' + role)
    );
  }

  ngOnInit() {
    this.iterator = this.accountService.getNewId();
  }

  onCreateAccount(accountName: string, accountRole: Role) {
    this.accountService.addOne(new Account(this.iterator, accountName, accountRole));
  }
}
