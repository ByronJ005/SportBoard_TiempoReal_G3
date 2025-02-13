import { Component, OnInit } from '@angular/core';
import { competitionHeader } from '../data';

@Component({
    selector: 'app-encabezado-competencia',
    templateUrl: './encabezado-competencia.component.html',
    styleUrls: ['./encabezado-competencia.component.scss'],
    standalone: false
})
export class EncabezadoCompetenciaComponent implements OnInit {
  header = competitionHeader;

  constructor() {}

  ngOnInit(): void {}
}