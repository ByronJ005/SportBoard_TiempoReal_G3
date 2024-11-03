import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabpartidosComponent } from './tabpartidos.component';

describe('TabpartidosComponent', () => {
  let component: TabpartidosComponent;
  let fixture: ComponentFixture<TabpartidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabpartidosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabpartidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
