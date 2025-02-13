import { Component } from '@angular/core';
import { mockMatches } from '../data';

@Component({
    selector: 'app-resultados-estadistica',
    templateUrl: './resultados-estadistica.component.html',
    styleUrl: './resultados-estadistica.component.scss',
    standalone: false
})
export class ResultadosEstadisticaComponent {
  results = mockMatches

  constructor() { }

  ngOnInit(): void {
  }
}
