import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-price-item',
  templateUrl: './price-item.component.html',
  styleUrls: ['./price-item.component.css']
})
export class PriceItemComponent implements OnInit {

  @Input('priceItem') element: {type: string, name: string, content: string};

  constructor() { }

  ngOnInit() {
  }

}
