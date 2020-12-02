import { Component, OnInit } from '@angular/core';
import { appRoutes } from '../../app.routes';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  routes = appRoutes;

  constructor() { }

  ngOnInit(): void {
  }

}
