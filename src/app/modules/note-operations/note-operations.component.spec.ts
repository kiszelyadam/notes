import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteOperationsComponent } from './note-operations.component';

describe('NoteOperationsComponent', () => {
  let component: NoteOperationsComponent;
  let fixture: ComponentFixture<NoteOperationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoteOperationsComponent]
    });
    fixture = TestBed.createComponent(NoteOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
