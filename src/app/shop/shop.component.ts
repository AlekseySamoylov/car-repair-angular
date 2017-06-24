import { Component, OnInit } from '@angular/core';
import {Material} from '../shared/material.model';
import {ShopService} from './shop.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
  providers: [ShopService]
})
export class ShopComponent implements OnInit {

  selectedMaterial: Material;
  constructor(private route: ActivatedRoute,
              private  shopService: ShopService) { }

  ngOnInit() {
    // const shopDetailId =
    //   Number(this.route.snapshot.params['id']);
    //
    // if (shopDetailId) {
    //   console.log('Hello route shop ' + shopDetailId);
    //   this.selectedMaterial = this.shopService.getOne(shopDetailId);
    //   console.log('Hello route shop ' + this.selectedMaterial);
    //
    // }
    this.route.params
      .subscribe(
        (params: Params) => {
          const id =
            Number(params['id']);
          this.selectedMaterial = this.shopService.getOne(id);
        }
      );
  }
  selectMaterial(selectedMaterial: Material) {
    this.selectedMaterial = selectedMaterial;
  }

}
