import { Myproj1Page } from './app.po';

describe('myproj1 App', () => {
  let page: Myproj1Page;

  beforeEach(() => {
    page = new Myproj1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
