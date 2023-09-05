import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Note } from 'src/app/definitions/note.definitions';
import { animate, style, transition, trigger } from '@angular/animations';
import { NoteOperationsService } from 'src/app/services/note-operations.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('animation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(50px)' }),
        animate(
          '.4s ease-out',
          style({ opacity: 1, transform: 'translateY(0px)' })
        ),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('.4s ease-in', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class HomeComponent {
  note$: Observable<Note[]> = this.activatedRoute.data.pipe(
    map((data) => data['data'])
  );
  noteId?: string;
  isVisible = false;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly noteService: NoteOperationsService) {}

  open(noteId: string): void {
    this.isVisible = true;
    this.noteId = noteId;
  }

  overlay_click(): void {
    this.isVisible = false;
  }

  modalActions(noteId: string): void {
    if (noteId) {
      this.noteService.deleteNoteById(noteId);
    }
    this.isVisible = false;
    this.note$ = this.noteService.getNotes$();
  }
}
