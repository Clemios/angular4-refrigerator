import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulesGeneratorComponent } from './schedules-generator.component';

describe('SchedulesGeneratorComponent', () => {
  let component: SchedulesGeneratorComponent;
  let fixture: ComponentFixture<SchedulesGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedulesGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulesGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
