import {Component, OnDestroy, OnInit} from '@angular/core';
import {Material} from '../shared/material.model';
import {ShopService} from './shop.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
  providers: [ShopService]
})
export class ShopComponent implements OnInit, OnDestroy {

  selectedMaterial: Material;
  paramsSubscription: Subscription;
  constructor(private route: ActivatedRoute,
              private  shopService: ShopService) { }

  ngOnInit() {
    this.paramsSubscription = this.route.params
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
  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

}
