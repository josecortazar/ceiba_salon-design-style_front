import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Trm } from './shared/model/trm';
import { TrmService } from './shared/servicio/trm.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public trmConsulta: Observable<Trm>;
  public valorTrm:number;

  constructor( protected trmServices: TrmService) {

  }

  ngOnInit() {
    this.consultar();
  }

  consultar() {

    this.trmConsulta = this.trmServices.consultarPorFecha();

    this.trmConsulta.subscribe(
      data => {
        this.valorTrm = data[0].valor;
        console.log(this.valorTrm);
        console.log(data[0].valor);
      }
    );

  }



}
