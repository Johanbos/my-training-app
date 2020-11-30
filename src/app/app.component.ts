import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-training-app';
  online = true;

  @HostListener('window:offline')
  goOffline() {
    this.online = false;
  }

  @HostListener('window:online')
  goOnline() {
    this.online = true;
  }
}
