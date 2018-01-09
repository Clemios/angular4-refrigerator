import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesEditorComponent } from './recipes-editor.component';

describe('RecipesEditorComponent', () => {
  let component: RecipesEditorComponent;
  let fixture: ComponentFixture<RecipesEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RecipesEditorComponent]
    })
      .compileComponents()
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  })
})
