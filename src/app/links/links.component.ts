import { Component, OnInit } from '@angular/core';
import { LinksService } from '../shared/service/links.service';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {
  list: string[] = []
  constructor(private linksService: LinksService) { }

  ngOnInit(): void {
    this.list = this.linksService.getLinks();
  }

}
