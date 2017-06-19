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
  private iterator = 3;
  constructor(private accountService: AccountService) { }

  ngOnInit() {
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    console.log('Hello ' + accountName);
    this.accountService.addOne(new Account(this.iterator++, accountName, Role.USER));
  }
}
