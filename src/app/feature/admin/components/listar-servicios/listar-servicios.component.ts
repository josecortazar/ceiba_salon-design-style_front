import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Servicio } from 'src/app/feature/servicio/shared/model/servicio';
import { ServicioService } from 'src/app/feature/servicio/shared/service/servicio.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-listar-servicios',
  templateUrl: './listar-servicios.component.html',
  styleUrls: ['./listar-servicios.component.scss']
})
export class ListarServiciosComponent implements OnInit {

  public listaServicios: Observable<Servicio[]>;
  public conConsulta: boolean = false;
  public esConsultaVacia: boolean = false;

  constructor(protected servicioService: ServicioService) { }

  ngOnInit() {
    this.listaServicios = this.servicioService.consultar();
    this.listaServicios.subscribe(
      data => {
        console.log(data[0])
        if (data[0] != null) {
          this.conConsulta = true;
        } else {
          this.esConsultaVacia = true;
          swal.fire("No hay servicios registradas actualmente.", "OK.");
        }
      }, err => {
        swal.fire(err.error.mensaje, err.error.nombreExcepcion);
      });
  }



}
