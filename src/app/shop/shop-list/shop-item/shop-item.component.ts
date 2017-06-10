import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Material} from '../../../shared/material.model';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.css']
})
export class ShopItemComponent implements OnInit {

  @Input() material: Material;
  @Output() materialSelected = new EventEmitter<Material>();
  constructor() { }

  ngOnInit() {
  }
  onSelectItem(material: Material) {
    this.materialSelected.emit(material);
  }

}
