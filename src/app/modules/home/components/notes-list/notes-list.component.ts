import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Note } from 'src/app/definitions/note.definitions';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotesListComponent {
  @Input() set notes(note: Note[] | null) {
    this._notes = note ?? [];
  }

  @Output() openModal: EventEmitter<string> = new EventEmitter<string>();

  get notes(): Note[] {
    return this._notes;
  }

  openDialog(id: string): void {
    this.openModal.emit(id);
  }

  private _notes: Note[] = [];
  
}
