import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyReciplansComponent } from './my-reciplans.component';

describe('MyReciplansComponent', () => {
  let component: MyReciplansComponent;
  let fixture: ComponentFixture<MyReciplansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyReciplansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyReciplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
