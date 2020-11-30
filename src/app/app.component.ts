import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-training-app';
  online = true;
  smallViewPort = false;

  constructor() {
    this.onResize();
  }

  @HostListener('window:offline')
  onOffline() {
    this.online = false;
  }

  @HostListener('window:online')
  onOnline() {
    this.online = true;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?: any) {
    const currentWindow = event != null ? event.target.window : window;
    this.smallViewPort = currentWindow.innerWidth < 500;
  }
}