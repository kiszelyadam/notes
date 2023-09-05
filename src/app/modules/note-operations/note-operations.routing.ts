import { Routes } from '@angular/router';
import { NoteOperationsComponent } from './note-operations.component';
import { NoteOperationsResolver } from 'src/app/resolvers/note-operation.resolver';

export const noteOperationsRoutes: Routes = [
  {
    path: '',
    component: NoteOperationsComponent,
    resolve: {data: NoteOperationsResolver},
  },
];
