import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Trm } from '../model/trm';

@Injectable({
  providedIn: 'root'
})
export class TrmService {

  constructor(private http: HttpClient) { }

  public consultarPorFecha() {
    return this.http.get<Trm>(`https://www.datos.gov.co/resource/32sa-8pi3.json?&$order=vigenciahasta%20DESC&$limit=1`);
  }

}
