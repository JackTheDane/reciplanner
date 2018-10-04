import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingMeterComponent } from './ranking-meter.component';

describe('RankingMeterComponent', () => {
  let component: RankingMeterComponent;
  let fixture: ComponentFixture<RankingMeterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankingMeterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingMeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
