import { Component, OnInit, Input } from '@angular/core';
import {Price} from '../../../../shared/price.model';
import { PriceType } from '../../../../shared/price-type.enum';

@Component({
  selector: 'app-price-item',
  templateUrl: './price-item.component.html',
  styleUrls: ['./price-item.component.css']
})
export class PriceItemComponent implements OnInit {

  @Input('priceItem') priceItem: Price;

  constructor() { }

  ngOnInit() {
  }
  isSuper(): boolean {
    return this.priceItem.type === PriceType.SUPER;
  }
  isNormal(): boolean {
    return this.priceItem.type === PriceType.NORMAL;
  }

}
