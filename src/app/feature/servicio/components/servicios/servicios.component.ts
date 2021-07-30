import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Servicio } from '../../shared/model/servicio';
import { ServicioService } from '../../shared/service/servicio.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {
  public listaServicios: Observable<Servicio[]>;
  

  constructor(protected servicioService: ServicioService) { }

  ngOnInit() {
    this.listaServicios = this.servicioService.consultar();
  }

  

}
