import { KrzychuPage } from './app.po';

describe('krzychu App', () => {
  let page: KrzychuPage;

  beforeEach(() => {
    page = new KrzychuPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
