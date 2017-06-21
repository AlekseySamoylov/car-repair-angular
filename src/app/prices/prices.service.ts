import {Price} from '../shared/price.model';

export class PricesService {
  private prices: Price[] = [
    new Price('Engine repair', 'good work', 20000),
    new Price('Gear box repair', 'good work', 30000)
  ];

  getPrices() {
    return this.prices.slice(); // get new array copy this. (encapsulation)
  }
}
