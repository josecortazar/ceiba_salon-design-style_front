import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Itemreserva } from '../../shared/model/itemreserva';
import { ItemreservaService } from '../../shared/servicio/itemreserva/itemreserva.service';
import swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { Servicio } from '../../../servicio/shared/model/servicio';
import { ServicioService } from '../../../servicio/shared/service/servicio.service';

@Component({
  selector: 'app-crear-itemreserva',
  templateUrl: './crear-itemreserva.component.html',
  styleUrls: ['./crear-itemreserva.component.scss']
})
export class CrearItemreservaComponent implements OnInit {

  public listaServicios: Observable<Servicio[]>;
  public itemForm: FormGroup;
  public idReserva: number;

  constructor(protected itemReservaServices: ItemreservaService, protected servicioService:ServicioService, private router:Router) { }

  ngOnInit() {

    this.listaServicios = this.servicioService.consultar();

    this.construirFormularioReserva();
    this.idReserva = Number(localStorage.getItem("idReserva"))
    if (this.idReserva > 0) {
      console.log(this.idReserva);
    }

  }

  private construirFormularioReserva() {
    this.itemForm = new FormGroup({
      servicio: new FormControl('', [Validators.required]),
    });
  }

  crear() {
    this.guardarItem();
  }

  private guardarItem() {
    var itemFormateado = this.construirItemReserva();
    this.itemReservaServices.guardar(itemFormateado).subscribe(
      response => {
        if (response) {
          swal.fire("El item quedo registrado.");
          this.router.navigate(["/reserva/listar-itemreservas/"]);
        }
      }, err => {
        swal.fire(err.error.mensaje, err.error.nombreExcepcion);
      }
    );
  }

  private construirItemReserva() {
    return new Itemreserva(
      null,
      this.idReserva,
      this.itemForm.get("servicio").value,
      null,
      null
    )
  }

}