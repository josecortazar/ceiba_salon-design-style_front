import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Trm } from '../model/trm';

@Injectable({
  providedIn: 'root'
})
export class TrmService {

  constructor(private http: HttpClient) { }

  public consultarPorFecha(fecha:string) {
    return this.http.get<Trm>(`https://www.datos.gov.co/resource/ceyp-9c7c.json?vigenciadesde=`+fecha);
  }

}
