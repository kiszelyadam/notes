import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Note } from 'src/app/definitions/note.definitions';
import { NoteOperationsService } from 'src/app/services/note-operations.service';


@Injectable()
export class HomeResolver implements Resolve<Observable<Note[]>> {

  constructor(private readonly noteService: NoteOperationsService) {}

  public resolve(): Observable<Note[]> {
    return this.noteService.getNotes$();
  }

}
