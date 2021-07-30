import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import swal from 'sweetalert2';
import { ReservaService } from '../../shared/servicio/reserva/reserva.service';
import { DatePipe } from '@angular/common';
import { Reserva } from '../../shared/model/reserva';
import { ClienteService } from 'src/app/feature/cliente/shared/service/cliente.service';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/feature/cliente/shared/model/cliente';

@Component({
  selector: 'app-crear-reserva',
  templateUrl: './crear-reserva.component.html',
  styleUrls: ['./crear-reserva.component.scss']
})
export class CrearReservaComponent implements OnInit {

  public reservaForm: FormGroup;
  public clienteConsulta: Observable<Cliente>;
  public idCliente: number;
  public identificacionCli: string;

  constructor(protected reservaServices: ReservaService, protected clienteServices: ClienteService, private router: Router) { }

  ngOnInit() {
    this.construirFormularioReserva();
    var identificacionCliente = localStorage.getItem("identificacionCliente");
    if (identificacionCliente !== null) {
      this.identificacionCli = identificacionCliente;
    }
  }

  private construirFormularioReserva() {
    this.reservaForm = new FormGroup({
      fechaReserva: new FormControl('', [Validators.required]),
    });
  }

  crear() {
    this.obtenerIdCliente();
  }



  obtenerIdCliente() {
    this.clienteConsulta = this.clienteServices.consultarIdentificacion(Number(this.identificacionCli));

    this.clienteConsulta.subscribe(
      data => {
        this.idCliente = data.id;
        this.guardarReserva();
      }, err => {
        swal.fire(err.error.mensaje, err.error.nombreExcepcion);
      }
    );
  }

  private guardarReserva() {
    var reservaFormateada = this.construirReserva();

    this.reservaServices.guardar(reservaFormateada).subscribe(
      response => {
        if (response) {
          swal.fire("La reserva se registro satisfactoriamente.", "Ahora agregue sus servicios");
          this.router.navigate(["/reserva/listar-reservas/"]);
        }
      }, err => {
        swal.fire(err.error.mensaje, err.error.nombreExcepcion);
      }
    );
  }

  private construirReserva() {
    var fechaActual = Date.now();
    var datePipe = new DatePipe("en-US");

    return new Reserva(
      null,
      this.idCliente,
      datePipe.transform(fechaActual, 'yyyy-MM-dd HH:mm:ss'),
      datePipe.transform(this.reservaForm.get('fechaReserva').value, 'yyyy-MM-dd HH:mm:ss'),
      0,
      0,
      0,
      false)
  }

}
