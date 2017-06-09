import {Component, Input, OnInit} from '@angular/core';
import {Material} from '../../../shared/material.model';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.css']
})
export class ShopItemComponent implements OnInit {

  @Input('shopItem') material: Material;
  constructor() { }

  ngOnInit() {
  }

}
