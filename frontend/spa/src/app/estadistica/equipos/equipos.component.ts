import { Component, OnInit } from '@angular/core';
import { mockTeams } from '../data';

@Component({
    selector: 'app-equipos',
    templateUrl: './equipos.component.html',
    styleUrls: ['./equipos.component.scss'],
    standalone: false
})
export class EquiposComponent implements OnInit {
  teams = mockTeams;

  constructor() {}

  ngOnInit(): void {}
}