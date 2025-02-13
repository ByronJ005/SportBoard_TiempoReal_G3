import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeCompetenciesComponent } from './home-competencies/home-competencies.component';
import { CompetenceDialogFormComponent } from './competence-dialog-form/competence-dialog-form.component';
import { AdminCompetenciasComponent } from './admin-competencias/admin-competencias.component';

const routes: Routes = [
  { path: '', component: HomeCompetenciesComponent },
  { path: 'admin-competence', component: AdminCompetenciasComponent },
  { path: 'competence-dialog-form', component: CompetenceDialogFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompetenciasRoutingModule { }
