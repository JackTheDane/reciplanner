import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeCardContainerComponent } from './recipe-card-container.component';

describe('RecipeCardContainerComponent', () => {
  let component: RecipeCardContainerComponent;
  let fixture: ComponentFixture<RecipeCardContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeCardContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeCardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
