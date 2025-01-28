import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CompetenceService } from '../../services/competencies/competence.service';
import { FormatService } from '../../services/competencies/format.service';
import { RuleDisciplineService } from '../../services/competencies/rule-discipline.service';
import { RuleCompetenceService } from '../../services/competencies/rule-competence.service';
import { Format } from '../../models/competencies/format.model';
import { RuleDiscipline } from '../../models/competencies/rule-discipline.model';
import { RuleCompetition } from '../../models/competencies/rule-competence.model';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-competence-dialog-form',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './competence-dialog-form.component.html',
  styleUrls: ['./competence-dialog-form.component.scss']
})
export class CompetenceDialogFormComponent implements OnInit {
  competenceForm: FormGroup;
  formats: Format[] = [];
  ruleDisciplines: RuleDiscipline[] = [];
  ruleCompetitions: RuleCompetition[] = [];

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CompetenceDialogFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private competenceService: CompetenceService,
    private formatService: FormatService,
    private ruleDisciplineService: RuleDisciplineService,
    private ruleCompetenceService: RuleCompetenceService
  ) {
    this.competenceForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      logo: [null, Validators.required],
      competence_format: [''],
      rule_discipline_list: [[]],
      rule_list: [[]]
    });

    if (data && data.competence) {
      this.competenceForm.patchValue(data.competence);
    }
  }

  ngOnInit(): void {
    this.formatService.getFormats().subscribe(formats => this.formats = formats);
    this.ruleDisciplineService.getRuleDisciplines().subscribe(ruleDisciplines => this.ruleDisciplines = ruleDisciplines);
    this.ruleCompetenceService.getRuleCompetences().subscribe(ruleCompetitions => this.ruleCompetitions = ruleCompetitions);
  }

  onFileChange(event: any): void {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.competenceForm.patchValue({ logo: file });
    }
  }

  submit(): void {
    if (this.competenceForm.valid) {
      const formData = new FormData();
      Object.keys(this.competenceForm.controls).forEach(key => {
        formData.append(key, this.competenceForm.get(key)?.value);
      });

      if (this.data.action === 'create') {
        this.competenceService.createCompetence(formData).subscribe(() => {
          this.dialogRef.close(true);
        });
      } else if (this.data.action === 'edit') {
        this.competenceService.updateCompetence(this.data.competence.id, formData).subscribe(() => {
          this.dialogRef.close(true);
        });
      } else if (this.data.action === 'delete') {
        this.competenceService.deleteCompetence(this.data.competence.id).subscribe(() => {
          this.dialogRef.close(true);
        });
      }
    }
  }

  close(): void {
    this.dialogRef.close();
  }
}