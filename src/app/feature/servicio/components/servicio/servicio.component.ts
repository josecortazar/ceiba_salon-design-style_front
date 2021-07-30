import { Component, Input, OnInit } from '@angular/core';
import { Servicio } from '../../shared/model/servicio';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.scss']
})
export class ServicioComponent implements OnInit {

  @Input()
  servicio!: Servicio;

  constructor() { }

  ngOnInit(): void {
  }

}
