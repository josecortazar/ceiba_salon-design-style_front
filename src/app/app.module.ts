import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from '@home/home.component';
import { CoreModule } from '@core/core.module';
import { CookieService } from 'ngx-cookie-service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactoComponent } from './feature/contacto/contacto.component';
import { PageNotFoundComponent } from './feature/page-not-found/page-not-found.component';
import { ReservaModule } from './feature/reserva/reserva.module';
import { ServicioModule } from './feature/servicio/servicio.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactoComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReservaModule,
    ServicioModule,
    CoreModule,
    BrowserAnimationsModule
  ],
  providers: [CookieService],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
