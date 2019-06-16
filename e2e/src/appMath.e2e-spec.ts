import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
import { Input } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display equation editor page', () => {
    page.navigateToIndex();
    expect(page.getTitleText()).toEqual('Equation Editor');
  });

  it('Should locate the nav bar', () => {
    expect(page.getNavBar()).toBeDefined();
});

  it('should have equation fields', () =>{

    page.getEditorField().isDisplayed();
    page.getTranslationField().isPresent();
    page.getDisplayField().isDisplayed();
  });

  it('should translate equation', () =>{

    page.getEditorField().sendKeys('sum i^3=((n(n+1))/2)^2');
    expect(page.getTranslationField().getText()).toContain('left( n + 1');
    expect(page.getDisplayField().getText()).toBeDefined();
  });


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
