import { Component, OnInit } from "@angular/core";
import { AuthService } from "./../user/auth.service";
import { Isession, EventService } from "../events/shared";

@Component({
  selector: "navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  searchTerm: string = "";
  foundSessions: Isession[];
  constructor(private auth: AuthService, private eventService: EventService) {}

  ngOnInit() {}

  searchSessions(searchTerm) {
    this.eventService.searchSessions(searchTerm).subscribe(sessions => {
      this.foundSessions = sessions;
    });
  }
}
