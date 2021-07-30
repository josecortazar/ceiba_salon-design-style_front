import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearClienteComponent } from './components/crear-cliente/crear-cliente.component';
import { CrearItemreservaComponent } from './components/crear-itemreserva/crear-itemreserva.component';
import { CrearReservaComponent } from './components/crear-reserva/crear-reserva.component';
import { ListarItemreservaComponent } from './components/listar-itemreserva/listar-itemreserva.component';
import { ListarReservasComponent } from './components/listar-reservas/listar-reservas.component';
import { MenuReservaComponent } from './components/menu-reserva/menu-reserva.component';

const routes: Routes = [
  {
    path: '',
    component: MenuReservaComponent,
    children: [
      {
        path: 'crear-cliente',
        component: CrearClienteComponent
      },
      {
        path: 'listar-reservas',
        component: ListarReservasComponent
      },
      {
        path: 'crear-reservas',
        component: CrearReservaComponent
      },
      {
        path: 'listar-itemreservas',
        component: ListarItemreservaComponent
      },
      {
        path: 'crear-itemreservas',
        component: CrearItemreservaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservaRoutingModule { }
