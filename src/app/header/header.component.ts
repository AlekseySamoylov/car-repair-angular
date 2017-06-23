import {Component, EventEmitter, Output} from "@angular/core";
import {HeaderTab} from "../shared/header-tab.enum";

const MAGIC_NUMBER = 768;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent {
  @Output() menuTabSelected = new EventEmitter<HeaderTab>();

  headerSelect() {
    if (screen.width < MAGIC_NUMBER) {
      document.getElementById('nav-bar-button').click();
    }
  }
}
