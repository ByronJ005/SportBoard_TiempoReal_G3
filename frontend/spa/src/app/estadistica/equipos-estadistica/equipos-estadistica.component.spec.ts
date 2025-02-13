import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquiposEstadisticaComponent } from './equipos-estadistica.component';

describe('EquiposEstadisticaComponent', () => {
  let component: EquiposEstadisticaComponent;
  let fixture: ComponentFixture<EquiposEstadisticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquiposEstadisticaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquiposEstadisticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
