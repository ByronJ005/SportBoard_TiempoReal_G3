import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CompetenceService } from '../../services/competencies/competence.service';
import { Competence } from '../../models/competencies/competence.model';
import { CompetenceDialogFormComponent } from '../competence-dialog-form/competence-dialog-form.component';
import { SharedModule } from '../../shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-competencias',
  standalone: true,
  imports: [SharedModule, MatDialogModule],
  templateUrl: './admin-competencias.component.html',
  styleUrls: ['./admin-competencias.component.scss']
})
export class AdminCompetenciasComponent implements OnInit {
  competences: Competence[] = [];
  displayedColumns: string[] = ['name', 'description', 'logo', 'competence_format', 'rule_discipline_list', 'rule_list'];
  selectedCompetence: Competence | null = null;

  constructor(private competenceService: CompetenceService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadCompetences();
  }

  loadCompetences(): void {
    this.competenceService.getCompetences().subscribe(data => {
      this.competences = data;
    });
  }

  openDialog(action: string, competence?: Competence): void {
    const dialogRef = this.dialog.open(CompetenceDialogFormComponent, {
      width: '400px',
      data: { action, competence }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadCompetences();
      }
    });
  }

  refresh(): void {
    this.loadCompetences();
  }

  create(): void {
    this.openDialog('create');
  }

  edit(competence: Competence): void {
    this.openDialog('edit', competence);
  }

  delete(competence: Competence): void {
    this.openDialog('delete', competence);
  }

  onSelect(competence: Competence): void {
    this.selectedCompetence = competence;
  }
}
