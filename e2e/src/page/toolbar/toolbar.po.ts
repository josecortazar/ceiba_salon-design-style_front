import { by, element } from 'protractor';

export class Toolbar {
   
      getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }

}
