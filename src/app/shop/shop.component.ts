import { Component, OnInit } from '@angular/core';
import {Material} from '../shared/material.model';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  selectedMaterial: Material;
  constructor() { }

  ngOnInit() {
  }
  selectMaterial(selectedMaterial: Material) {
    this.selectedMaterial = selectedMaterial;
  }

}
