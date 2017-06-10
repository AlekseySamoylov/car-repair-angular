import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ElementRef,
  ViewChild
} from '@angular/core';
import { Price } from '../../../shared/price.model';
import { PriceType } from '../../../shared/price-type.enum';

@Component({
  selector: 'app-price-item',
  templateUrl: './price-item.component.html',
  styleUrls: ['./price-item.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, Native
})
export class PriceItemComponent implements OnInit,
  OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {

  @Input('priceItem') priceItem: Price;
  // @ViewChild('contentParagraph') paragraphRef: ElementRef;
  constructor() {
    console.log('constructor log');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('onChanges called');
    console.log(changes);
  }
  ngOnInit() {
    // console.log('onInit log ' + this.paragraphRef.nativeElement.textContent);
  }
  ngDoCheck() {
    console.log('doCheck log');
  }
  ngAfterContentInit(): void {
  }

  ngAfterContentChecked(): void {
  }

  ngAfterViewInit(): void {
  }

  ngAfterViewChecked(): void {
  }

  ngOnDestroy(): void {
  }

  isSuper(): boolean {
    return this.priceItem.type === PriceType.SUPER;
  }
  isNormal(): boolean {
    return this.priceItem.type === PriceType.NORMAL;
  }
  onChangeIt(price: Price) {
    price.title = price.title + '!';
  }

}
