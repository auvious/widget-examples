import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  renderWidget = false;

  ngOnInit(): void {
    customElements
      .whenDefined("app-auvious-widget")
      .then(() => this.showWidget());
  }

  private showWidget() {
    this.renderWidget = true;
  }
}
