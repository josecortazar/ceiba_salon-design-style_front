import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Reserva } from '../../shared/model/reserva';
import { ReservaService } from '../../shared/servicio/reserva/reserva.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-reservas',
  templateUrl: './listar-reservas.component.html',
  styleUrls: ['./listar-reservas.component.scss']
})
export class ListarReservasComponent implements OnInit {


  public listaReservas: Observable<Reserva[]>;
  public clienteForm: FormGroup;

  public conConsulta: boolean = false;
  public esConsultaVacia: boolean = false;

  constructor(protected reservaService: ReservaService, private router:Router) { }

  ngOnInit() {


    this.construirFormularioCliente();

    var identificacionCliente = localStorage.getItem("identificacionCliente");
    if (identificacionCliente!==null) {
      this.consultar(identificacionCliente);
    }
  }

  obtenerIdentificacion(){
    var identificacion: string = this.clienteForm.get('identificacion').value;
    localStorage.setItem("identificacionCliente", identificacion)
    this.consultar(identificacion);
    
  }

  consultar(identificacion:string) {
    this.listaReservas = this.reservaService.consultarReservasUsuario(identificacion);

    this.listaReservas.subscribe(
      data => {
        console.log(data[0])
        if (data[0] != null) {
          this.conConsulta = true;
          this.esConsultaVacia = false;
        } else {
          this.conConsulta = false;
          this.esConsultaVacia = true;
          swal.fire("El cliente no existe o no tiene reservas activas actualmente.", "Te invitamos a registrarte y realizar una reserva.");
        }
      }, err => {
        swal.fire(err.error.mensaje, err.error.nombreExcepcion);
      }
    );
  }

  private construirFormularioCliente() {
    this.clienteForm = new FormGroup({
      identificacion: new FormControl('', [Validators.required, Validators.min(1)]
      )
    });
  }

  consultarItems(idReserva:number){
    console.log(idReserva);
    localStorage.setItem("idReserva", idReserva.toString())
    this.router.navigate(["reserva/listar-itemreservas"]);
  }

}
