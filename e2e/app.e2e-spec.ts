import { AngularticPage } from './app.po';

describe('angulartic App', function() {
  let page: AngularticPage;

  beforeEach(() => {
    page = new AngularticPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
