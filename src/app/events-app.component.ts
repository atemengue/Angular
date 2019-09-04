import { Component } from '@angular/core';

@Component({
  selector: 'events-app-root',
  template: `
    <navbar></navbar>
    <events-list></events-list>
  `
})
export class EventsAppComponent {
  title = 'ps-demo';
}
