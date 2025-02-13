import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompetenciasRoutingModule } from './competencias-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { CompetenceService } from '../services/competencies/competence.service';
import { TitleCasePipe } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HomeCompetenciesComponent } from './home-competencies/home-competencies.component';
import { CompetenceDialogFormComponent } from './competence-dialog-form/competence-dialog-form.component';
import { AdminCompetenciasComponent } from './admin-competencias/admin-competencias.component';
import { MatTableDataSource } from '@angular/material/table';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CompetenciasRoutingModule,
    SharedModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatSelectModule,
    MatCardModule,
    DragDropModule,
    HomeCompetenciesComponent,
    CompetenceDialogFormComponent,
    AdminCompetenciasComponent
  ],
  providers: [CompetenceService, TitleCasePipe],
})
export class CompetenciasModule { }