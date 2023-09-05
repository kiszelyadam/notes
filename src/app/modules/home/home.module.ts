import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { NotesListComponent } from './components/notes-list/notes-list.component';
import { RouterModule } from "@angular/router";
import { homeRoutes } from "./home.routing";
import { NoteOperationsService } from "src/app/services/note-operations.service";
import { HomeResolver } from "../../resolvers/home.resolver";
import { CommonModule } from "@angular/common";
import { DeleteModalComponent } from "src/app/shared/delete-modal/delete-modal.component";

@NgModule({
    declarations: [
        HomeComponent,
        NotesListComponent
    ],
    imports: [
        RouterModule.forChild(homeRoutes),
        CommonModule,
        DeleteModalComponent
    ],
    providers: [HomeResolver]
})


export class HomeModule {}