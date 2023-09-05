import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { map, tap } from 'rxjs';
import { NOTE_OWNER } from 'src/app/app.component';
import { Note } from 'src/app/definitions/note.definitions';
import { NoteOperationsService } from 'src/app/services/note-operations.service';

@Component({
  selector: 'app-note-operations',
  templateUrl: './note-operations.component.html',
  styleUrls: ['./note-operations.component.scss']
})
export class NoteOperationsComponent {

  notes: FormGroup = this.fb.nonNullable.group(
    {
      title:  ['', [Validators.required]],
      description: ['', [Validators.required]]
    }
  );
  hasFormError = false;
  noteError = 'Minden mező kitöltése kötelező.'
  isNew? = false;
  notesData?: Note;

  noteData$ = this.activatedRoute.data.pipe(
    tap((data) => {
      this.isNew = data['isNew'];
      if (!this.isNew) {
        this.notesData = data['data'];
        this.notes.setValue({
          title: data['data']?.title,
          description: data['data']?.description
        })
      }
    }),
  )

  constructor (
    private readonly fb: FormBuilder,
    private readonly noteService: NoteOperationsService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {}

   createOrModifiyNote(): void {
    if (!this.notes.valid) {
      this.hasFormError = true;
      return;
    }
    let notes: Note;
    const baseDetails: Partial<Note> = {
      publishDate: new Date(),
      owner: NOTE_OWNER
    };
    if (this.isNew) {
      notes = {
        id: `note_${Math.floor(Math.random() * 999999)}`,
        ...this.notes.getRawValue(),
        ...baseDetails
      };

      this.noteService.addNote(notes);
    } else {
      notes = {
        id: this.notesData?.id,
        ...baseDetails,
        ...this.notes.getRawValue(),
      }

      this.noteService.updateNote(notes?.id, notes);
    }
    this.router.navigate(['/']);
    this.notes.reset();
    this.hasFormError = false;
   }

}
