import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JugadoresEstadisticaComponent } from './jugadores-estadistica.component';

describe('JugadoresEstadisticaComponent', () => {
  let component: JugadoresEstadisticaComponent;
  let fixture: ComponentFixture<JugadoresEstadisticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JugadoresEstadisticaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JugadoresEstadisticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
