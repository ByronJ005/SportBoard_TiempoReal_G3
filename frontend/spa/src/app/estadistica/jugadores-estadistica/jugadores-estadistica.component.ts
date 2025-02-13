import { Component } from '@angular/core';
import { mockPlayerStats } from '../data';

type PlayerStat = 'goals' | 'assists' | 'yellowCards' | 'redCards';

@Component({
    selector: 'app-jugadores-estadistica',
    templateUrl: './jugadores-estadistica.component.html',
    styleUrls: ['./jugadores-estadistica.component.scss'],
    standalone: false
})
export class JugadoresEstadisticaComponent {
  playerStats = mockPlayerStats;
  filteredStats = mockPlayerStats;
  currentStats: string[] = ['all'];
  displayedColumns: string[] = ['position', 'name', 'team', 'goals', 'assists', 'yellowCards', 'redCards'];

  filterStats(stat: string) {
    if (stat === 'all') {
      this.currentStats = ['all'];
      this.filteredStats = this.playerStats;
      this.displayedColumns = ['position', 'name', 'team', 'goals', 'assists', 'yellowCards', 'redCards'];
    } else {
      const index = this.currentStats.indexOf(stat);
      if (index > -1) {
        this.currentStats.splice(index, 1);
      } else {
        this.currentStats.push(stat);
      }

      if (this.currentStats.length === 0) {
        this.currentStats = ['all'];
        this.filteredStats = this.playerStats;
        this.displayedColumns = ['position', 'name', 'team', 'goals', 'assists', 'yellowCards', 'redCards'];
      } else {
        this.currentStats = this.currentStats.filter(s => s !== 'all');
        this.filteredStats = this.playerStats.filter(player =>
          this.currentStats.some(stat => player[stat as PlayerStat] > 0)
        );
        this.displayedColumns = ['position', 'name', 'team', ...this.currentStats];
      }
    }
  }
}