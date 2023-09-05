import { Injectable } from '@angular/core';
import { Note } from '../definitions/note.definitions';
import { NOTE_OWNER } from '../app.component';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteOperationsService {

  constructor() { }

  notes: Note[] = [];

  getNotes$(): Observable<Note[]> {
    return of(this.getNotes());
  }

  getNotes(): Note[] {
    this.notes = JSON.parse(localStorage.getItem(NOTE_OWNER) || '[]');
    return this.notes;
  }

  isNoteExist(id: string): boolean {
    const notes = this.getNotes()
    return !!notes.find((note) => note?.id === id);
  }

  getNoteById(id: string): Note | undefined {
    return this.notes.find((note) => note?.id === id);
  }

  deleteNoteById(id:string) {
    const index = this.notes.findIndex((note) => note.id === id);
    this.notes.splice(index, 1);
    this.setStorage();
  }

  updateNote(id: string, noteData: Note): void {
    if (!this.notes.find((note) => note?.id === id)) {
      return;
    }
    this.notes = this.notes.map((note) => {
      if (note.id === id) {
        note = noteData;
      }
      return note;
    });
    this.setStorage();
  }

  addNote(note: Note): void {
    this.notes = [];
    const availableNotes = JSON.parse(localStorage.getItem(NOTE_OWNER) || '[]');

    if (availableNotes?.length) {
      this.notes = this.notes.concat(availableNotes);
    }

    this.notes.push(note);

    this.setStorage();
  }

  setStorage(): void {
    localStorage.setItem(NOTE_OWNER, JSON.stringify(this.notes));
  }
}
