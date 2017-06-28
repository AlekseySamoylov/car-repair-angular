import {Component, EventEmitter, Output} from '@angular/core';
import {HeaderTab} from '../shared/header-tab.enum';
import {AuthService} from '../auth.service';

const MAGIC_NUMBER = 768;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent {
  @Output() menuTabSelected = new EventEmitter<HeaderTab>();

  constructor(private authService: AuthService) {
  }

  headerSelect() {
    if (screen.width < MAGIC_NUMBER) {
      document.getElementById('nav-bar-button').click();
    }
  }

  onLogIn() {
    this.authService.login();
  }

  onLogOut() {
    this.authService.logout();
  }
}
