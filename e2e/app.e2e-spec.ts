import { CliBasePage } from './app.po';

describe('cli-base App', function() {
  let page: CliBasePage;

  beforeEach(() => {
    page = new CliBasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
