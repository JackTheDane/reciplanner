import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuerySuggestionsComponent } from './query-suggestions.component';

describe('QuerySuggestionsComponent', () => {
  let component: QuerySuggestionsComponent;
  let fixture: ComponentFixture<QuerySuggestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuerySuggestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuerySuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
