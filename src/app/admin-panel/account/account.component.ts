import {Component, Input, OnInit} from '@angular/core';
import {Account} from '../account.model';
import {AccountService} from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: []
})
export class AccountComponent implements OnInit {

  @Input() account: Account;
  @Input() id: number;

  constructor(private accountService: AccountService) { }

  ngOnInit() {
  }

}
