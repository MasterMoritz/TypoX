import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
import { Input } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display login page', () => {
    page.navigateToLogin();
    expect(page.getTitleText()).toEqual('Login');
  });

  it('Should locate the nav bar', () => {
    expect(page.getNavBar()).toBeDefined();
});

  it('should have login mask', () =>{

    page.getLoginButton().isDisplayed();
    page.getLoginFieldMail().isPresent();
    page.getLoginFieldPw().isDisplayed();
  });

  it('try to log in', () =>{

    page.getLoginFieldMail().sendKeys('test@test.de');
    page.getLoginFieldPw().sendKeys('123456');

    page.getLoginButton().click();
    expect(page.getToastContainer().isDisplayed());
  });


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
