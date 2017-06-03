import { CarRepairAngularPage } from './app.po';

describe('car-repair-angular App', () => {
  let page: CarRepairAngularPage;

  beforeEach(() => {
    page = new CarRepairAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
