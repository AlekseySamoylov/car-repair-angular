import { Component, OnInit } from '@angular/core';
import { Price } from '../../shared/price.model';

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.css']
})
export class PriceListComponent implements OnInit {

  prices: Price[] = [
    new Price('Engine repair', 'good work', 20000),
    new Price('Gear box repair', 'good work', 30000)
  ];

  ngOnInit(): void {
  }
  onPriceAdded(newPrice: Price) {
    this.prices.push(newPrice);
  }

  onSuperPriceAdded(newSuperPrice: Price) {
    this.prices.push(newSuperPrice);
  }
}


