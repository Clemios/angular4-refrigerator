import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogDisplayerComponent } from './log-displayer.component';

describe('LogDisplayerComponent', () => {
  let component: LogDisplayerComponent;
  let fixture: ComponentFixture<LogDisplayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogDisplayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
