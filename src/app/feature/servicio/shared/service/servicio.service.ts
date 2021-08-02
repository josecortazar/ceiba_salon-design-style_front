import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Servicio } from '../model/servicio';

@Injectable()
export class ServicioService {

  constructor(protected http: HttpService) { }

  public consultar() {
    return this.http.doGet<Servicio[]>(`${environment.endpoint}/servicios/`,
      this.http.optsName('Listar los servicios'));
  }


  public guardar(servicio: Servicio) {
    console.log(servicio);
    return this.http.doPost<Servicio, boolean>(`${environment.endpoint}/servicios/`, servicio,
      this.http.optsName('crear/actualizar servicio'));
  }

  public eliminar(servicio: Servicio) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/servicios/${servicio}`,
      this.http.optsName('eliminar servicio'));
  }

}
