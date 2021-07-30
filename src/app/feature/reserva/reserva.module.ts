import { NgModule } from '@angular/core';

import { ReservaRoutingModule } from './reserva-routing.module';
import { CrearClienteComponent } from './components/crear-cliente/crear-cliente.component';
import { ListarReservasComponent } from './components/listar-reservas/listar-reservas.component';
import { CrearReservaComponent } from './components/crear-reserva/crear-reserva.component';
import { CrearItemreservaComponent } from './components/crear-itemreserva/crear-itemreserva.component';
import { MenuReservaComponent } from './components/menu-reserva/menu-reserva.component';
import { SharedModule } from '@shared/shared.module';
import { ListarItemreservaComponent } from './components/listar-itemreserva/listar-itemreserva.component';
import { ServicioService } from '../servicio/shared/service/servicio.service';
import { ItemreservaService } from './shared/servicio/itemreserva/itemreserva.service';
import { ReservaService } from './shared/servicio/reserva/reserva.service';


@NgModule({
  declarations: [
    CrearClienteComponent,
    ListarReservasComponent,
    CrearReservaComponent,
    CrearItemreservaComponent,
    MenuReservaComponent,
    ListarItemreservaComponent
  ],
  imports: [
    SharedModule,
    ReservaRoutingModule
  ],

  providers: [ServicioService, ItemreservaService, ReservaService]
})
export class ReservaModule { }
