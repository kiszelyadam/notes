import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeleteModalComponent {

  @Input() set noteIdent(n: string) {
    this._noteId = n;
  }

  get noteId() {
    return this._noteId as string;
  }

  @Output() modalActions: EventEmitter<string> = new EventEmitter<string>();

  private _noteId?: string;

  modalAction(noteId?: string) {
    this.modalActions.emit(noteId);
  }
}
