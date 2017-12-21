import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefrigeratorListComponent } from './refrigerator-list.component';

describe('RefrigeratorListComponent', () => {
  let component: RefrigeratorListComponent;
  let fixture: ComponentFixture<RefrigeratorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefrigeratorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefrigeratorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
