import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetenceDialogFormComponent } from './competence-dialog-form.component';

describe('CompetenceDialogFormComponent', () => {
  let component: CompetenceDialogFormComponent;
  let fixture: ComponentFixture<CompetenceDialogFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompetenceDialogFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompetenceDialogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
