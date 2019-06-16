import { browser, by, element, ElementFinder } from 'protractor';

export class AppPage {
  navigateToLogin() {
    return browser.get('/login') as Promise<any>;

  }
  navigateToIndex() {
    return browser.get(browser.baseUrl) as Promise<any>;

  }

  getTitleText() {
    return element(by.css('h1')).getText() as Promise<string>;
  }

  getNavBar(): ElementFinder {
    return element(by.tagName('nav'));
  }

  getLoginButton(): ElementFinder {
    return element(by.id('pLoginBtn'));
  }

  getLoginFieldMail(): ElementFinder {
    return element(by.id('fmail'));
  }

  getLoginFieldPw(): ElementFinder {
    return element(by.id('fpassword'));
  }

  getToastContainer(): ElementFinder {
    return element(by.id('toast-container'));
  }

  getEditorField(): ElementFinder {
    return element(by.id('Editor'));
  }

  getTranslationField(): ElementFinder {
    return element(by.id('translation'));
  }

  getDisplayField(): ElementFinder {
    return element(by.id('displayField'));
  }

  getSymbolSum(): ElementFinder {
    return element(by.id('iconSum'));
  }

  getSymbolBar(): ElementFinder {
    return element(by.id('symbolNavBar'));
  }

}
