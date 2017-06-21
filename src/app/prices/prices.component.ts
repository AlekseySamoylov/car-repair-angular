import { Component } from '@angular/core';
import {PricesService} from "./prices.service";

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  providers: [PricesService]
})
export class PricesComponent {


}
