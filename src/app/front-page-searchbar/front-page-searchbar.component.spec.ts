import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontPageSearchbarComponent } from './front-page-searchbar.component';

describe('FrontPageSearchbarComponent', () => {
  let component: FrontPageSearchbarComponent;
  let fixture: ComponentFixture<FrontPageSearchbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontPageSearchbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontPageSearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
