///<reference path='shop/shop.component.ts'/>
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AdminPanelComponent} from './admin-panel/admin-panel.component';
import {ContactsComponent} from './contacts/contacts.component';
import {ShopComponent} from './shop/shop.component';
import {CarRepairComponent} from './car-repair/car-repair.component';
import {PricesComponent} from './prices/prices.component';
import {AboutComponent} from './about/about.component';
import {BasketComponent} from './basket/basket.component';
import {AuthGuard} from './auth-guard.service';
import {RegistrationComponent} from './registration/registration.component';

const appRoutes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'prices', component: PricesComponent },
  { path: 'car-repair', component: CarRepairComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'shop/:id', component: ShopComponent },
  { path: 'basket', component: BasketComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'admin-panel',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: AdminPanelComponent },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
