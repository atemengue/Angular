import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {
  constructor() {}

  @Input() event: any;
  ngOnInit() {}
}
