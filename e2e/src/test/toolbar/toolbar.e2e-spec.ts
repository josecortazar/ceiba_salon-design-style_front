import { AppPage } from '../../app.po';
import { browser, logging } from 'protractor';
import { Toolbar } from 'e2e/src/page/toolbar/toolbar.po';

describe('workspace-project App', () => {
    let page: AppPage;
    let toolbar: Toolbar;

    beforeEach(() => {
      page = new AppPage();
      toolbar = new Toolbar();
    });
  
    it('Texto del componente toolbar', () => {
      page.navigateTo('/');
      expect(toolbar.getTitleText()).toEqual('Design & Style Salón de belleza');
    });
  
    afterEach(async () => {
      // Assert that there are no errors emitted from the browser
      const logs = await browser.manage().logs().get(logging.Type.BROWSER);
      expect(logs).not.toContain(jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry));
    });
  });
  