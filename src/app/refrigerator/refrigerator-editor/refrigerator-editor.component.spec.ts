import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefrigeratorEditorComponent } from './refrigerator-editor.component';

describe('RefrigeratorEditorComponent', () => {
  let component: RefrigeratorEditorComponent;
  let fixture: ComponentFixture<RefrigeratorEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefrigeratorEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefrigeratorEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
