import { Component, OnInit } from '@angular/core';
import { Price } from '../../shared/price.model';
import {PricesService} from "../prices.service";

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.css']
})
export class PriceListComponent implements OnInit {
  prices: Price[];
  constructor(private priceService: PricesService) {
  }
  ngOnInit(): void {
    this.prices = this.priceService.getPrices();
  }
  onPriceAdded(newPrice: Price) {
    this.prices.push(newPrice);
  }

  onSuperPriceAdded(newSuperPrice: Price) {
    this.prices.push(newSuperPrice);
  }
}


