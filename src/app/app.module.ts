import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import {HeaderComponent} from './header/header.component';
import {PricesComponent} from './prices/prices.component';
import { ShopComponent } from './shop/shop.component';
import { ShopListComponent } from './shop/shop-list/shop-list.component';
import { ShopDetailComponent } from './shop/shop-detail/shop-detail.component';
import { ShopItemComponent } from './shop/shop-list/shop-item/shop-item.component';
import { BasketComponent } from './basket/basket.component';
import { BasketListComponent } from './basket/basket-list/basket-list.component';
import { BasketEditComponent } from './basket/basket-list/basket-edit/basket-edit.component';
import { PriceListComponent } from './prices/price-list/price-list.component';
import { PriceItemComponent } from './prices/price-list/price-item/price-item.component';
import { PriceManagerComponent } from './prices/price-list/price-manager/price-manager.component';
import { AboutComponent } from './about/about.component';
import { CarRepairComponent } from './car-repair/car-repair.component';
import {BasicHighlightDirective} from './custom-directives/basic-highlight.directive';
import { BetterHighlightDirective } from './custom-directives/better-highlight.directive';
import { UnlessDirective } from './custom-directives/unless.directive';
import {DropdownDirective} from './custom-directives/dropdown.directive';
import { AccountComponent } from './admin-panel/account/account.component';
import { NewAccountComponent } from './admin-panel/new-account/new-account.component';
import {AdminPanelComponent} from './admin-panel/admin-panel.component';
import {LoggingService} from './utils/logging.service';

@NgModule({
  declarations: [
    AppComponent,
    AdminPanelComponent,
    HeaderComponent,
    PricesComponent,
    ContactsComponent,
    ShopComponent,
    ShopListComponent,
    ShopDetailComponent,
    ShopItemComponent,
    BasketComponent,
    BasketListComponent,
    BasketEditComponent,
    PriceListComponent,
    PriceItemComponent,
    PriceManagerComponent,
    AboutComponent,
    CarRepairComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    DropdownDirective,
    AccountComponent,
    NewAccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
