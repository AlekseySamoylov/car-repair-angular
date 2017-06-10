import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Material } from '../../shared/material.model';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit {
  materialList: Material[] = [
    new Material('Brake pads', 'Good part for Toyota', 'http://www.alekseysamoylov.com/serviceiii/files/staticImages/3'),
    new Material('GRM belt', 'Good part for Toyota', 'http://www.alekseysamoylov.com/serviceiii/files/staticImages/1'),
    new Material('Water pump', 'Good part for Toyota', 'http://www.alekseysamoylov.com/serviceiii/files/staticImages/1'),
    new Material('Brake pads', 'Good part for Toyota', 'http://ecx.images-amazon.com/images/I/517-mcfN+rL._AC_US160_.jpg'),
    new Material('Brake pads', 'Good part for Toyota', 'http://www.alekseysamoylov.com/serviceiii/files/staticImages/2'),
    new Material('GRM belt', 'Good part for Toyota', 'http://www.alekseysamoylov.com/serviceiii/files/staticImages/1'),
    new Material('Water pump', 'Good part for Toyota', 'http://www.alekseysamoylov.com/serviceiii/files/staticImages/1')
  ];

  @Output() materialWasSelected = new EventEmitter<Material>();
  constructor() { }

  ngOnInit() {
  }
  throwUpMaterialSelected(selectedMaterial: Material) {
    this.materialWasSelected.emit(selectedMaterial);
  }

}
