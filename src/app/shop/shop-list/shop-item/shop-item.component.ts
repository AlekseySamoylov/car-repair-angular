import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Material} from '../../../shared/material.model';
import {LoggingService} from "../../../utils/logging.service";

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.css'],
  providers: [ LoggingService ]
})
export class ShopItemComponent implements OnInit {

  @Input() material: Material;
  @Output() materialSelected = new EventEmitter<Material>();
  constructor(private LOG: LoggingService) {
    LOG.className = 'ShopItemComponent';
  }

  ngOnInit() {
  }
  onSelectItem(material: Material) {
    this.LOG.info('Material selected ' + material);
    this.materialSelected.emit(material);
  }

}
