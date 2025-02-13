import { Component, OnInit } from '@angular/core';
import { mockMatches, mockUpcomingMatches } from '../data';

@Component({
    selector: 'app-partido-proximos-estadistica',
    templateUrl: './partido-proximos-estadistica.component.html',
    styleUrls: ['./partido-proximos-estadistica.component.scss'],
    standalone: false
})
export class PartidoProximosEstadisticaComponent implements OnInit {
  matches = mockUpcomingMatches;

  constructor() {}

  ngOnInit(): void {}
}