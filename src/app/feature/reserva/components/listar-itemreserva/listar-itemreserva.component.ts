import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Itemreserva } from '../../shared/model/itemreserva';
import { ItemreservaService } from '../../shared/servicio/itemreserva/itemreserva.service';
import swal from 'sweetalert2';


@Component({
  selector: 'app-listar-itemreserva',
  templateUrl: './listar-itemreserva.component.html',
  styleUrls: ['./listar-itemreserva.component.scss']
})
export class ListarItemreservaComponent implements OnInit {

  public idReserva!: number;
  public listaItemReservas: Observable<Itemreserva[]>;
  public esConsultaVacia: boolean = true;

  constructor(protected itemreservaService: ItemreservaService) { }

  ngOnInit(): void {
    this.idReserva = Number(localStorage.getItem("idReserva"))
    if (this.idReserva > 0) {
      console.log(this.idReserva);
      this.consultarItems();
    }

  }

  consultarItems() {

    this.listaItemReservas = this.itemreservaService.consultarItemDeReservas(this.idReserva);

    this.listaItemReservas.subscribe(
      data => {
        if (data[0] != null) {
          this.esConsultaVacia = false;
        } else {
          this.esConsultaVacia = true;
          swal.fire("La reserva no tiene items.", "Te invitamos a registrar un item para la reserva");
        }
      }, err => {
        swal.fire(err.error.mensaje, err.error.nombreExcepcion);
      }
    );
  }

}
