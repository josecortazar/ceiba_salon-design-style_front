import { AppPage } from '../../app.po';
import { browser, logging } from 'protractor';
import { NavbarPage } from 'e2e/src/page/navbar/navbar.po';

describe('workspace-project App', () => {
    let page: AppPage;
    let navBar: NavbarPage;

    beforeEach(() => {
      page = new AppPage();

    });

    it('Texto del item 1 del menu', () => {
      page.navigateTo('/');
      expect(navBar.getTextoMenu1).toEqual('Home');
    });
    
    afterEach(async () => {
      // Assert that there are no errors emitted from the browser
      const logs = await browser.manage().logs().get(logging.Type.BROWSER);
      expect(logs).not.toContain(jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry));
    });
  });
  