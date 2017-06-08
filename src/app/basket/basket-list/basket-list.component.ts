import { Component, OnInit } from '@angular/core';
import { ShopingBasketItem } from '../../shared/shoping-basket-item.model';
import { Material } from '../../shared/material.model';

@Component({
  selector: 'app-basket-list',
  templateUrl: './basket-list.component.html',
  styleUrls: ['./basket-list.component.css']
})
export class BasketListComponent implements OnInit {
  shopingBasketItems: ShopingBasketItem[] = [
    new ShopingBasketItem(
      new Material('Brake pads', 'Good part for Toyota', 'http://www.alekseysamoylov.com/serviceiii/files/staticImages/3'),
      2
    ),
    new ShopingBasketItem(
      new Material('GRM belt', 'Good part for Toyota', 'http://www.alekseysamoylov.com/serviceiii/files/staticImages/1'),
      3
    )
  ];
  constructor() { }

  ngOnInit() {
  }

}
