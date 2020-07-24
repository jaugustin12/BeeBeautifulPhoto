import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'beeBeautiful-photography';
  @ViewChild('toggle', {static: false}) toggle: ElementRef;
  closed = true;

  constructor(
    private renderer: Renderer2) { }

  toggleButton() {
    this.closed = !this.closed;
  }
}
