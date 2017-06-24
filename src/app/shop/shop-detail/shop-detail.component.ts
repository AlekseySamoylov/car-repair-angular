import {Component, Input, OnInit} from '@angular/core';
import {Material} from '../../shared/material.model';
import {ActivatedRoute} from '@angular/router';
import {ShopService} from '../shop.service';

@Component({
  selector: 'app-shop-detail',
  templateUrl: './shop-detail.component.html',
  styleUrls: ['./shop-detail.component.css']
})
export class ShopDetailComponent implements OnInit {

  @Input() selectedMaterial: Material;
  constructor() { }

  ngOnInit() {
  }

}
