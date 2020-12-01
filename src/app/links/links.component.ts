import { Component, OnInit } from '@angular/core';
import { LinksService } from '../shared/service/links.service';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {
  list: string[] = [];
  loading = true;
  constructor(private linksService: LinksService) { }

  ngOnInit(): void {
    this.linksService.getLinks().subscribe((data) => {
      this.list = data;
      this.loading = false;
    });
  }

}
