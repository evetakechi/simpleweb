import { SimplewebPage } from './app.po';

describe('simpleweb App', () => {
  let page: SimplewebPage;

  beforeEach(() => {
    page = new SimplewebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
