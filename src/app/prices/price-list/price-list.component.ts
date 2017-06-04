import { Component, OnInit } from '@angular/core';
import { Price } from '../price.model';

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.css']
})
export class PriceListComponent implements OnInit {
  prices: Price[] = [
    new Price(1, 'Engine repair', 'good work', 20000),
    new Price(1, 'Engine repair', 'good work', 20000)
  ];
  constructor() { }

  ngOnInit() {
    console.log(this.prices);
  }

}
