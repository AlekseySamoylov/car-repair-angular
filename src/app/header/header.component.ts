import { Component } from '@angular/core';

const MAGIC_NUMBER = 768;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent {
  navbarOpened = false;
  // TODO (Aleksey Samoylov) Fix this bad code from last project.
  tabNumber = 1;
  headerSelect(tabNumber: number) {
    console.log('Hello navbar tab number ' + tabNumber + ' clicked');
    this.tabNumber = tabNumber;
    if (screen.width < MAGIC_NUMBER) {
      document.getElementById('nav-bar-button').click();
    }
  }
  isHeaderTabSelected(tabNumber: number) {
    return this.tabNumber === tabNumber;
  }
  navbarButtonClick() {
    this.navbarOpened = !this.navbarOpened;
    console.log('Hello navbar button clicked!');
  }
}
