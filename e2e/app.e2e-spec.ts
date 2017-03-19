import { LearnAngularJsPage } from './app.po';

describe('learn-angular-js App', () => {
  let page: LearnAngularJsPage;

  beforeEach(() => {
    page = new LearnAngularJsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
