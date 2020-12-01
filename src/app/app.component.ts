import { Component, HostListener } from '@angular/core';
import { BackgroundColorService } from './shared/service/background-color.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-training-app';
  online = true;
  smallViewPort = false;
  backgroundColor$: any;

  constructor(private backgroundColorService: BackgroundColorService) {
    this.onResize();
    this.backgroundColor$ = this.backgroundColorService.value$.asObservable();
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