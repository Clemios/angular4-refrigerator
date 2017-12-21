import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogWritterComponent } from './log-writter.component';

describe('LogWritterComponent', () => {
  let component: LogWritterComponent;
  let fixture: ComponentFixture<LogWritterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogWritterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogWritterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
