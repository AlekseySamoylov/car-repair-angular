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

@NgModule({
  declarations: [
    AppComponent,
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
    PriceManagerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
