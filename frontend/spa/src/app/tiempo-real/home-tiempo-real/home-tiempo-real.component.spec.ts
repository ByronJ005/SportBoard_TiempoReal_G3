import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTiempoRealComponent } from './home-tiempo-real.component';

describe('HomeTiempoRealComponent', () => {
  let component: HomeTiempoRealComponent;
  let fixture: ComponentFixture<HomeTiempoRealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeTiempoRealComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeTiempoRealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
