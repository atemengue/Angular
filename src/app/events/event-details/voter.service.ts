import { Isession } from "./../shared/event.model";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class VoterService {
  constructor() {}

  deleteVoter(session: Isession, voterName: string) {
    session.voters = session.voters.filter(voter => voter !== voterName);
  }

  addVoter(session: Isession, voterName: string) {
    session.voters.push(voterName);
  }

  userHasVoted(session: Isession, voterName: string) {
    return session.voters.some(voter => voter === voterName);
  }
}
