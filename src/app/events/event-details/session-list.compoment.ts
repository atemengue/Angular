import { Component, Input, OnChanges } from "@angular/core";
import { Isession } from "../shared";
import { timingSafeEqual } from "crypto";
@Component({
  selector: "session-list",
  templateUrl: "./session-list.component.html"
})
export class SessionListComponent implements OnChanges {
  @Input() sessions: Isession[];
  @Input() filterBy: string;
  visibleSessions: Isession[] = [];

  ngOnChanges() {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
    }
  }
  filterSessions(filter) {
    if (filter === "all") {
      this.visibleSessions = this.sessions.slice(0);
    } else {
      this.visibleSessions = this.sessions.filter(session => {
        return session.level.toLocaleLowerCase() === filter;
      });
    }
  }
}
