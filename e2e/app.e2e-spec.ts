import { AngularapiPage } from './app.po';

describe('angularapi App', () => {
  let page: AngularapiPage;

  beforeEach(() => {
    page = new AngularapiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
