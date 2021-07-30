import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Servicio } from '../model/servicio';

@Injectable()
export class ServicioService {

  constructor(protected http: HttpService) { }

  public consultar() {
    console.log(this.http.doGet<Servicio[]>(`${environment.endpoint}/servicios/`),this.http.optsName('Listar los servicios'));
    return this.http.doGet<Servicio[]>(`${environment.endpoint}/servicios/`,
      this.http.optsName('Listar los servicios'));
  }

}
