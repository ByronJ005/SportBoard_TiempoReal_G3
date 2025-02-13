import { Component } from '@angular/core';
import { mockTeamStats } from '../data';

type TeamStat = 'goalsFor' | 'goalsAgainst' | 'goalDifference' | 'points' | 'possession' | 'shotsOnTarget' | 'passesCompleted' | 'yellowCards' | 'redCards';

@Component({
    selector: 'app-equipos-estadistica',
    templateUrl: './equipos-estadistica.component.html',
    styleUrls: ['./equipos-estadistica.component.scss'],
    standalone: false
})
export class EquiposEstadisticaComponent {
  teamStats = mockTeamStats;
  filteredStats = mockTeamStats;
  currentStats: string[] = ['all'];
  displayedColumns: string[] = ['team', 'played', 'won', 'drawn', 'lost', 'goalsFor', 'goalsAgainst', 'goalDifference', 'points', 'possession', 'shotsOnTarget', 'passesCompleted', 'yellowCards', 'redCards'];

  filterStats(stat: string) {
    if (stat === 'all') {
      this.currentStats = ['all'];
      this.filteredStats = this.teamStats;
      this.displayedColumns = ['team', 'played', 'won', 'drawn', 'lost', 'goalsFor', 'goalsAgainst', 'goalDifference', 'points', 'possession', 'shotsOnTarget', 'passesCompleted', 'yellowCards', 'redCards'];
    } else {
      const index = this.currentStats.indexOf(stat);
      if (index > -1) {
        this.currentStats.splice(index, 1);
      } else {
        this.currentStats.push(stat);
      }

      if (this.currentStats.length === 0) {
        this.currentStats = ['all'];
        this.filteredStats = this.teamStats;
        this.displayedColumns = ['team', 'played', 'won', 'drawn', 'lost', 'goalsFor', 'goalsAgainst', 'goalDifference', 'points', 'possession', 'shotsOnTarget', 'passesCompleted', 'yellowCards', 'redCards'];
      } else {
        this.currentStats = this.currentStats.filter(s => s !== 'all');
        this.filteredStats = this.teamStats.filter(team =>
          this.currentStats.some(stat => Number(team[stat as TeamStat]) > 0)
        );
        this.displayedColumns = ['team', 'played', 'won', 'drawn', 'lost', ...this.currentStats];
      }
    }
  }
}