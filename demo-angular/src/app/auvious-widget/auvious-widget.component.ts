import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "ng-auvious-widget",
  templateUrl: "./auvious-widget.component.html",
  styleUrls: ["./auvious-widget.component.css"],
})
export class AuviousWidgetComponent implements OnInit {
  @ViewChild("widget") widget?: ElementRef<HTMLElement>;

  // initial widget options
  pcEnvironment = "mypurecloud.de";
  pcOrganizationId = "?";
  pcDeploymentId = "?";
  pcCallbackQueue = "?";
  applicationId = "?";
  pcQueue = "?";

  constructor() {}

  ngOnInit(): void {}

  onReady() {
    const widget: any = this.widget!.nativeElement;

    // call methods
    // widget.launch("video");
  }
}
