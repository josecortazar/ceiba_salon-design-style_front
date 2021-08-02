import { by, element } from 'protractor';

export class NavbarPage {
    linkHome = element(by.xpath('/html/body/app-root/app-navbar/nav/a[1]'));
    linkServicios = element(by.xpath('/html/body/app-root/app-navbar/nav/a[2]'));
    linkReservas = element(by.xpath('/html/body/app-root/app-navbar/nav/a[3]'));
    linkContacto = element(by.xpath('/html/body/app-root/app-navbar/nav/a[4]'));

    async clickBotonHome() {
        await this.linkHome.click();
    }

    async clickBotonServicios() {
        await this.linkServicios.click();
    }

    async clickBotonReservas() {
        await this.linkReservas.click();
    }

    async clickBotonContacto() {
        await this.linkContacto.click();
    }
}
