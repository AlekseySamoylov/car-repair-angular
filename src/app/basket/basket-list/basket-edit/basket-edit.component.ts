import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Material} from '../../../shared/material.model';
import {ShoppingBasketItem} from '../../../shared/shopping-basket-item.model';

@Component({
  selector: 'app-basket-edit',
  templateUrl: './basket-edit.component.html',
  styleUrls: ['./basket-edit.component.css']
})
export class BasketEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output('shoppingItemToSave') shoppingItemToSave = new EventEmitter<ShoppingBasketItem>();
  constructor() { }

  ngOnInit() {
  }

  onAddMaterial() {
    console.log('Hello ' + this.amountInputRef);
    const material = new Material(
      this.nameInputRef.nativeElement.textContent,
      'test description',
      'http://www.alekseysamoylov.com/serviceiii/files/staticImages/1'
    );
    const shoppingItem = new ShoppingBasketItem(
      material, this.amountInputRef.nativeElement.value);
    this.shoppingItemToSave.emit(shoppingItem);
  }
}
