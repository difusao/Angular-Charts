import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartlinetimeComponent } from './chartlinetime.component';

describe('ChartlinetimeComponent', () => {
  let component: ChartlinetimeComponent;
  let fixture: ComponentFixture<ChartlinetimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartlinetimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartlinetimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
