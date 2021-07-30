import { browser } from 'protractor';

export class AppPage {
  navigateTo(url: string) {
    return browser.get(browser.baseUrl + url) as Promise<any>;
  }

}
