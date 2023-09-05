import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteOperationsGuard } from './guards/note-operations.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'letrehozas',
    loadChildren: () => import('./modules/note-operations/note-operations.module').then((m) => m.NoteOperationsModule),
    data: {isNew: true}
  },
  {
    path: 'jegyzet/:noteSlug',
    loadChildren: () => import('./modules/note-operations/note-operations.module').then((m) => m.NoteOperationsModule),
    canActivate: [NoteOperationsGuard],
    data: {isNew: false}
  },
  {
    path: '404',
    loadComponent: () => import('./shared/not-found/not-found.component').then((c) => c.NotFoundComponent),
  },
  {
    path: '**',
    redirectTo: '/404'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
