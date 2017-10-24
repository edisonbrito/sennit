import { SennitAppPage } from './app.po';

describe('sennit-app App', function() {
  let page: SennitAppPage;

  beforeEach(() => {
    page = new SennitAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
