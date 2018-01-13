import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingsEditorComponent } from './listings-editor.component';

describe('ListingsEditorComponent', () => {
  let component: ListingsEditorComponent;
  let fixture: ComponentFixture<ListingsEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingsEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingsEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
