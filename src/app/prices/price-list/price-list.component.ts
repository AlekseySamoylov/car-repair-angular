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

  serverElements = [{name: 'test', type: 'server', content: 'test content'}];

  ngOnInit(): void {
  }
  onPriceAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onSuperPriceAdded(blueprintData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }
}
