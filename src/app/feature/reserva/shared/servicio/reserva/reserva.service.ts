import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Reserva } from '../../model/reserva';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  constructor(protected http: HttpService) { }


  public consultar() {
    return this.http.doGet<Reserva[]>(`${environment.endpoint}/reservas/`,
      this.http.optsName('Listar las reservas'));
  }

  public consultarReservasUsuario(identificacion: string) {
    return this.http.doGet<Reserva[]>(`${environment.endpoint}/reservas/cliente/` + identificacion,
      this.http.optsName('Listar las reservas'));
  }

  public guardar(reserva: Reserva) {
    return this.http.doPost<Reserva, boolean>(`${environment.endpoint}/reservas/`, reserva,
      this.http.optsName('crear/actualizar reserva'));
  }

  public eliminar(reserva: Reserva) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/reservas/${reserva.id}`,
      this.http.optsName('eliminar reserva'));
  }

}
