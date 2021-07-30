import { NgModule } from '@angular/core';

import { ClienteRoutingModule } from './cliente-routing.module';
import { CrearClienteComponent } from './components/crear-cliente/crear-cliente.component';

import { MatCardModule } from '@angular/material/card';
import { SharedModule } from '@shared/shared.module';
import { ClienteService } from './shared/service/cliente.service';

@NgModule({
  declarations: [

    CrearClienteComponent
  ],
  imports: [
    SharedModule,
    MatCardModule,
    ClienteRoutingModule
  ],
  exports: [
    MatCardModule,

  ],
  providers: [ClienteService]
})
export class ClienteModule { }
