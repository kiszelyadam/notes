import { NgModule } from "@angular/core";
import { NoteOperationsComponent } from './note-operations.component';
import { RouterModule } from "@angular/router";
import { noteOperationsRoutes } from "./note-operations.routing";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { NoteOperationsResolver } from "src/app/resolvers/note-operation.resolver";

@NgModule({
    declarations: [
    NoteOperationsComponent
  ],
    imports: [
      RouterModule.forChild(noteOperationsRoutes),
      ReactiveFormsModule,
      CommonModule
    ],
    providers: [NoteOperationsResolver]
})


export class NoteOperationsModule {}