import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { MenuAdminComponent } from './components/menu-admin/menu-admin.component';
import { ListarClientesComponent } from './components/listar-clientes/listar-clientes.component';
import { SharedModule } from '@shared/shared.module';
import { ListarServiciosComponent } from './components/listar-servicios/listar-servicios.component';
import { ListarReservasComponent } from './components/listar-reservas/listar-reservas.component';
import { CrearServicioComponent } from './components/crear-servicio/crear-servicio.component';


@NgModule({
  declarations: [
    MenuAdminComponent,
    ListarClientesComponent,
    ListarServiciosComponent,
    ListarReservasComponent,
    CrearServicioComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
