import { Component } from '@angular/core';

@Component({
  selector: 'events-app-root',
  template: `
    <navbar></navbar>
    <router-outlet></router-outlet>
  `
})
export class EventsAppComponent {
  title = 'ps-demo';
}
