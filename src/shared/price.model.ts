import {PriceType} from './price-type.enum';

export class Price {
  public title: string;
  public detail: string;
  public amount: number;
  public currencyName = '₽';
  public currencyPosition = true;
  public type: PriceType = PriceType.NORMAL;

  constructor(title: string, detail: string, price: number) {
    this.title = title;
    this.detail = detail;
    this.amount = price;
  }
  getPrice(): string {
    if (this.currencyPosition) {
      return this.amount + this.currencyName;
    } else {
      return this.currencyName + this.amount;
    }
  }
}
