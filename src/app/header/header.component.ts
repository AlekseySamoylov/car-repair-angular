import {Component, EventEmitter, Output} from '@angular/core';
import {HeaderTab} from '../shared/header-tab.enum';

const MAGIC_NUMBER = 768;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent {
  tabNumber = 1;
  @Output() menuTabSelected = new EventEmitter<HeaderTab>();

  headerSelect(tabNumber: number) {
    this.tabNumber = tabNumber;
    if (screen.width < MAGIC_NUMBER) {
      document.getElementById('nav-bar-button').click();
    }
  }
  isHeaderTabSelected(tabNumber: number) {
    return this.tabNumber === tabNumber;
  }

  openMainMenu() {
    this.menuTabSelected.emit(HeaderTab.MAIN);
  }
  openPriceMenu() {
    this.menuTabSelected.emit(HeaderTab.PRICES);
  }
  openCarRepairMenu() {
    this.menuTabSelected.emit(HeaderTab.CAR_REPAIR);
  }
  openShopMenu() {
    this.menuTabSelected.emit(HeaderTab.SHOP);
  }
  openContactsMenu() {
    this.menuTabSelected.emit(HeaderTab.CONTACTS);
  }
  openBasketMenu() {
    this.menuTabSelected.emit(HeaderTab.BASKET);
  }
  openAdminMenu() {
    this.menuTabSelected.emit(HeaderTab.ADMIN_PANEL);
  }

}
