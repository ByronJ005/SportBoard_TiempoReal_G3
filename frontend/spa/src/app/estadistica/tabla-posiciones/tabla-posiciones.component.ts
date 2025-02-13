import { Component } from '@angular/core';
import { mockStandings } from '../data';

@Component({
    selector: 'app-tabla-posiciones',
    templateUrl: './tabla-posiciones.component.html',
    styleUrls: ['./tabla-posiciones.component.scss'],
    standalone: false
})
export class TablaPosicionesComponent {
  displayedColumns: string[] = ['position', 'team', 'played', 'won', 'drawn', 'lost', 'lastMatches', 'points'];
  dataSource = mockStandings;
}