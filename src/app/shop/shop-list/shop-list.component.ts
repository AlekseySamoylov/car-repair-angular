import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Material } from '../../shared/material.model';
import {ShopService} from '../shop.service';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit {
  materialList: Material[] = [];

  @Output() materialWasSelected = new EventEmitter<Material>();
  constructor(private shopService: ShopService) { }

  ngOnInit() {
    this.materialList = this.shopService.getAll();
  }
  throwUpMaterialSelected(selectedMaterial: Material) {
    this.materialWasSelected.emit(selectedMaterial);
  }

}
