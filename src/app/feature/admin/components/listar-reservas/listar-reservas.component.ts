import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Reserva } from 'src/app/feature/reserva/shared/model/reserva';
import { ReservaService } from 'src/app/feature/reserva/shared/servicio/reserva/reserva.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-listar-reservas',
  templateUrl: './listar-reservas.component.html',
  styleUrls: ['./listar-reservas.component.scss']
})
export class ListarReservasComponent implements OnInit {

  public listaReservas: Observable<Reserva[]>;
  public conConsulta: boolean = false;
  public esConsultaVacia: boolean = false;

  constructor(protected reservaService: ReservaService) { }

  ngOnInit() {
    this.listaReservas = this.reservaService.consultar();
    this.listaReservas.subscribe(
        data => {
          console.log(data[0])
          if (data[0] != null) {
            this.conConsulta = true;
          } else {
            this.esConsultaVacia = true;
            swal.fire("No hay reservas registradas actualmente.", "OK.");
          }
        }, err => {
          swal.fire(err.error.mensaje, err.error.nombreExcepcion);
        });
  }

  eliminar(reserva: Reserva) {
    this.reservaService.eliminar(reserva).subscribe(data => {
      swal.fire("El cliente se elimino satisfactoriamente.");
      console.log(data);
      this.listaReservas = this.reservaService.consultar();
    }
    );
  }


}
