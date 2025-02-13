import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncabezadoCompetenciaComponent } from './encabezado-competencia.component';

describe('EncabezadoCompetenciaComponent', () => {
  let component: EncabezadoCompetenciaComponent;
  let fixture: ComponentFixture<EncabezadoCompetenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncabezadoCompetenciaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncabezadoCompetenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
