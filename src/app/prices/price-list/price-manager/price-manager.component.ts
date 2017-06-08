import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Price } from '../../../shared/price.model';
import {PriceType} from '../../../shared/price-type.enum';

@Component({
  selector: 'app-price-manager',
  templateUrl: './price-manager.component.html',
  styleUrls: ['./price-manager.component.css']
})
export class PriceManagerComponent implements OnInit {

  @Output() priceCreated = new EventEmitter<Price>();
  @Output() superPriceCreated = new EventEmitter<Price>();
  title: string;
  details: string;
  amount: number;

  constructor() { }

  ngOnInit() {
  }

  onAddServer() {
    const price = new Price(this.title, this.details, this.amount);
    this.priceCreated.emit(price);
  }

  onAddBlueprint() {
    const price = new Price(this.title, this.details, this.amount);
    price.type = PriceType.SUPER;
    this.superPriceCreated.emit(price);
  }


}
