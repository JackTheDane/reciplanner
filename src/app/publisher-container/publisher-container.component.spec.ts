import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublisherContainerComponent } from './publisher-container.component';

describe('PublisherContainerComponent', () => {
  let component: PublisherContainerComponent;
  let fixture: ComponentFixture<PublisherContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublisherContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublisherContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
