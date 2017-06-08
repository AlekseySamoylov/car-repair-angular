import { Component } from '@angular/core';
import {HeaderTab} from './shared/header-tab.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  headerTab = HeaderTab.MAIN;
  HeaderTab = HeaderTab;

  onHeaderTabChanged(headerTab: HeaderTab) {
    this.headerTab = headerTab;
    console.log(headerTab);
  }
}
