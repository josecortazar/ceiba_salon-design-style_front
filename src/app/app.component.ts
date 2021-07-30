import { Component } from '@angular/core';
import { MenuItem } from '@core/modelo/menu-item';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Design & Style';
  public companies: MenuItem[] = [
    { url: '/home', nombre: 'Home' },
    { url: '/servicio', nombre: 'Servicios' },
    { url: '/reserva', nombre: 'Reservas' },
    { url: '/contacto', nombre: 'Contacto' }
  ];

  
}
