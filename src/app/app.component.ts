import { Component } from '@angular/core';

export const NOTE_OWNER = 'akiszely';
@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'notes';
}
