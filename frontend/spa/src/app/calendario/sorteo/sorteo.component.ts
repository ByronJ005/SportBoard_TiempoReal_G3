import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sorteo',
  templateUrl: './sorteo.component.html',
  styleUrls: ['./sorteo.component.scss'],
  imports: [CommonModule]
})
export class SorteoComponent {
  groups: { [key: string]: string[] } = {
    A: ['Real Madrid', 'Juventus', 'PSV', 'Young Boys'],
    B: ['Manchester City', 'Milan', 'Celtic', 'Monaco'],
    C: ['FC Barcelona', 'Aston Villa', 'Lille', 'Girona'],
    D: ['Bayern Munich', 'Arsenal', 'Estrella Roja', 'Bolonia']
  };

  selectedGroup: string | null = null;

  selectGroup(groupKey: string) {
    this.selectedGroup = groupKey === this.selectedGroup ? null : groupKey; // Toggle selection
  }

  get matches() {
    if (!this.selectedGroup) return [];
    const teams = this.groups[this.selectedGroup as keyof typeof this.groups];
    return [
      { home: teams[0], away: teams[1] },
      { home: teams[2], away: teams[3] }
    ];
  }
}
