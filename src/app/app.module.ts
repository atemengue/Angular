import { LocationValidator } from "./events/location-validator.directive";
import { DurationPipe } from "./events/shared/duration.pipe";
import { SessionListComponent } from "./events/event-details/session-list.compoment";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { appRoutes } from "src/routes";
import {
  TOASTR_TOKEN,
  Toastr,
  JQ_TOKEN,
  CollapsibleWellComponent,
  SimpleModalComponent
} from "./common";
import { Error404Component } from "./errors/error404.component";
import { EventsAppComponent } from "./events-app.component";
import { CreateEventComponent } from "./events/create-event.component";
import { CreateSessionComponent } from "./events/event-details/create-session.component";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { EventRouteActivator } from "./events/event-details/event-route-activator.service";
import { EventListResolver } from "./events/event-list-resolver.service";
import { EventThumbnailComponent } from "./events/event-thumbnail.component";
import { EventsListComponent } from "./events/events-list.component";
import { EventService } from "./events/shared/event.service";
import { NavbarComponent } from "./nav/navbar.component";
import { AuthService } from "./user/auth.service";
import { ModalTriggerDirective } from "./common/modal-trigger.directive";
import { UpvoteComponent } from "./events/event-details/upvote.component";

let toastr: Toastr = window["toastr"];
let jQuery = window["$"];
@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    SimpleModalComponent,
    DurationPipe,
    ModalTriggerDirective,
    LocationValidator,
    UpvoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    AuthService,
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: JQ_TOKEN, useValue: jQuery },
    EventRouteActivator,
    EventListResolver
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule {}
