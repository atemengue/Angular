import { Component, Input, ViewChild, ElementRef, Inject } from "@angular/core";
import { JQ_TOKEN } from "./jQuery.service";

@Component({
  selector: "simple-modal",
  templateUrl: "./simpleModal.component.html",
  styleUrls: ["./simpleModal.component.css"]
})
export class SimpleModalComponent {
  @Input() title: string;
  @Input() elementId: string;
  @ViewChild("modalcontainer") containerEl: ElementRef;

  constructor(@Inject(JQ_TOKEN) private $: any) {}

  closeModal() {
    this.$(this.containerEl.nativeElement).modal("hide");
  }
}
