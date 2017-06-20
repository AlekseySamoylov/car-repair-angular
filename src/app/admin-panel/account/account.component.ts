import {Component, Input, OnInit} from '@angular/core';
import {Account} from '../account.model';
import {AccountService} from '../account.service';
import {Role} from "../role.enum";
import {LoggingService} from '../../utils/logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: []
})
export class AccountComponent implements OnInit {

  @Input() account: Account;
  @Input() id: number;
  public Role: Role;

  constructor(private accountService: AccountService, private LOGGER: LoggingService) { }

  ngOnInit() {
  }

  setTo(role: Role) {
    this.LOGGER.debug('Role ' + role);
  }

}
