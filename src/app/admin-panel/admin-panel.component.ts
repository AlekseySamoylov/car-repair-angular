import {Component, OnInit} from '@angular/core';
import {AccountService} from './account.service';
import {Account} from './account.model';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  providers: [AccountService]
})
export class AdminPanelComponent implements OnInit {

  accounts: Account[];

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.accounts = this.accountService.accounts;
  }
}
