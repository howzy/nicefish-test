import { JustTestPage } from './app.po';

describe('just-test App', function() {
  let page: JustTestPage;

  beforeEach(() => {
    page = new JustTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
