import { Component, OnInit } from '@angular/core';
import { ShoppingBasketItem } from '../../shared/shopping-basket-item.model';
import { Material } from '../../shared/material.model';

@Component({
  selector: 'app-basket-list',
  templateUrl: './basket-list.component.html',
  styleUrls: ['./basket-list.component.css']
})
export class BasketListComponent implements OnInit {
  shoppingBasketItems: ShoppingBasketItem[] = [
    new ShoppingBasketItem(
      new Material('Brake pads', 'Good part for Toyota', 'http://www.alekseysamoylov.com/serviceiii/files/staticImages/3'),
      2
    ),
    new ShoppingBasketItem(
      new Material('GRM belt', 'Good part for Toyota', 'http://www.alekseysamoylov.com/serviceiii/files/staticImages/1'),
      3
    )
  ];
  constructor() { }

  ngOnInit() {
  }
  addShoppingItemToSave(shoppingItemToSave: ShoppingBasketItem) {
    this.shoppingBasketItems.push(shoppingItemToSave);
  }

}
