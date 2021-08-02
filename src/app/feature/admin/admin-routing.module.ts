import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearServicioComponent } from './components/crear-servicio/crear-servicio.component';
import { ListarClientesComponent } from './components/listar-clientes/listar-clientes.component';
import { ListarReservasComponent } from './components/listar-reservas/listar-reservas.component';
import { ListarServiciosComponent } from './components/listar-servicios/listar-servicios.component';
import { MenuAdminComponent } from './components/menu-admin/menu-admin.component';

const routes: Routes = [
  {
    path: '',
    component: MenuAdminComponent,
    children: [
      {
        path: 'listar-clientes',
        component: ListarClientesComponent
      },
      {
        path: 'listar-reservas',
        component: ListarReservasComponent
      },
      {
        path: 'listar-servicios',
        component: ListarServiciosComponent
      }
      ,
      {
        path: 'crear-servicio',
        component: CrearServicioComponent
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
