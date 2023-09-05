import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Note } from 'src/app/definitions/note.definitions';
import { NoteOperationsService } from 'src/app/services/note-operations.service';


@Injectable()
export class NoteOperationsResolver implements Resolve<Observable<Note | undefined>> {

  constructor(private readonly noteService: NoteOperationsService) {}

  public resolve(snapshot: ActivatedRouteSnapshot): Observable<Note | undefined> {
    const slug = snapshot.params['noteSlug'];
    return of(this.noteService.getNoteById(slug) || undefined)
  }

}
