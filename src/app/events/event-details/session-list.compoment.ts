import { VoterService } from "./voter.service";
import { AuthService } from "./../../user/auth.service";
import { Component, Input, OnChanges } from "@angular/core";
import { Isession } from "../shared";

@Component({
  selector: "session-list",
  templateUrl: "./session-list.component.html"
})
export class SessionListComponent implements OnChanges {
  @Input() sessions: Isession[];
  @Input() filterBy: string;
  @Input() sortBy: string;
  visibleSessions: Isession[] = [];

  constructor(private auth: AuthService, private voterService: VoterService) {}

  ngOnChanges() {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
      this.sortBy == "name"
        ? this.visibleSessions.sort(sortByNameAsc)
        : this.visibleSessions.sort(sortByVotesDesc);
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

  toggleVote(session: Isession) {
    if (this.userHasVoted(session)) {
      this.voterService.deleteVoter(session, this.auth.currentUser.userName);
    } else {
      this.voterService.addVoter(session, this.auth.currentUser.userName);
    }

    if (this.sortBy === "votes") this.visibleSessions.sort(sortByVotesDesc);
  }

  userHasVoted(session: Isession) {
    return this.voterService.userHasVoted(
      session,
      this.auth.currentUser.userName
    );
  }
}

function sortByNameAsc(s1: Isession, s2: Isession) {
  if (s1.name > s2.name) return 1;
  else if (s1.name === s2.name) return 0;
  else return -1;
}

function sortByVotesDesc(s1: Isession, s2: Isession) {
  return s2.voters.length - s1.voters.length;
}
