import { NgModule } from '@angular/core';
import { ServicioRoutingModule } from './servicio-routing.module';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ServicioComponent } from './components/servicio/servicio.component';
import { SharedModule } from '@shared/shared.module';
import { ServicioService } from './shared/service/servicio.service';


@NgModule({
  declarations: [
    ServiciosComponent,
    ServicioComponent,
  ],
  imports: [
    ServicioRoutingModule,
    SharedModule
  ],

  providers: [ServicioService]
})
export class ServicioModule { }
