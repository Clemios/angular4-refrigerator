import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingsGeneratorComponent } from './listings-generator.component';

describe('ListingsGeneratorComponent', () => {
  let component: ListingsGeneratorComponent;
  let fixture: ComponentFixture<ListingsGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingsGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingsGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
