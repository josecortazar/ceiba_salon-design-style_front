import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Itemreserva } from '../../model/itemreserva';

@Injectable({
  providedIn: 'root'
})
export class ItemreservaService {

  constructor(protected http: HttpService) { }


  public consultar() {
    return this.http.doGet<Itemreserva[]>(`${environment.endpoint}/itemreservas/`,
      this.http.optsName('Listar las Itemreserva'));
  }

  public consultarItemDeReservas(id: number) {
    return this.http.doGet<Itemreserva[]>(`${environment.endpoint}/itemreservas/reserva/` + id,
      this.http.optsName('Listar las itemReservas'));
  }

  public guardar(itemReserva: Itemreserva) {
    console.log(itemReserva);
    return this.http.doPost<Itemreserva, boolean>(`${environment.endpoint}/itemreservas/`, itemReserva,
      this.http.optsName('crear/actualizar itemReservas'));
  }

  public eliminar(itemReserva: Itemreserva) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/itemreservas/${itemReserva.id}`,
      this.http.optsName('eliminar itemReserva'));
  }
}
