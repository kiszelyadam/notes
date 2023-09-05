import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, UrlTree } from '@angular/router';
import { NoteOperationsService } from 'src/app/services/note-operations.service';

@Injectable({
  providedIn: 'root',
})

export class NoteOperationsGuard implements CanActivate {
  constructor(
    private readonly noteService: NoteOperationsService,
    private readonly router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean | UrlTree {
    const slug = route.params['noteSlug'];
    return this.noteService.isNoteExist(slug) ? true : this.router.createUrlTree(['404']);
  }
}
