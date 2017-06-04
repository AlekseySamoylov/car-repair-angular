export class Price {
  public id: number;
  public title: string;
  public detail: string;
  public price: number;

  constructor(id: number, title: string, detail: string, price: number) {
    this.id = id;
    this.title = title;
    this.detail = detail;
    this.price = price;
  }
}
