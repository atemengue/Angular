import { Component, Input } from "@angular/core";
import { Isession } from "../shared";
@Component({
  selector: "session-list",
  templateUrl: "./session-list.component.html"
})
export class SessionListComponent {
  @Input() sessions: Isession[];
}
