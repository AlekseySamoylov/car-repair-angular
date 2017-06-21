import {Component, Input, OnInit} from '@angular/core';
import {Account} from '../account.model';
import {AccountService} from '../account.service';
import {Role} from '../role.enum';
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
  user = Role.USER;
  manager = Role.MANAGER;
  admin = Role.ADMIN;

  constructor(private accountService: AccountService) { }

  ngOnInit() {
  }

  onSetTo(role: Role) {
    this.accountService.updateRole(this.account.id, role);
    this.accountService.roleUpdated.emit(role);

  }

  onRoleName() {
    switch (this.account.role) {
      case Role.USER:
        return 'User';
      case Role.MANAGER:
        return 'Manager';
      case Role.ADMIN:
        return 'Admin';
      default:
        return 'Unexpected Role';
    }
  }

}
