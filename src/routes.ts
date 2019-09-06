import { Routes } from '@angular/router';
import { Error404Component } from './app/errors/error404.component';
import { CreateEventComponent } from './app/events/create-event.component';
import { CreateSessionComponent } from './app/events/event-details/create-session.component';
import { EventDetailsComponent } from './app/events/event-details/event-details.component';
import { EventRouteActivator } from './app/events/event-details/event-route-activator.service';
import { EventListResolver } from './app/events/event-list-resolver.service';
import { EventsListComponent } from './app/events/events-list.component';

export const appRoutes: Routes = [
  { path: 'events/new', component: CreateEventComponent },
  {
    path: 'events',
    component: EventsListComponent,
    resolve: { events: EventListResolver }
  },
  {
    path: 'events/:id',
    component: EventDetailsComponent,
    canActivate: [EventRouteActivator]
  },
  { path: 'events/session/new', component: CreateSessionComponent },
  { path: '404', component: Error404Component },
  { path: '', pathMatch: 'full', redirectTo: '/events' },
  { path: 'user', loadChildren: './user/user.module#UserModule' }
];
