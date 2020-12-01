import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { concatMap, tap } from 'rxjs/operators';
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
    /* this.list$ = this.linksService.getLinks()
      .pipe(
        tap(() => this.loading = false)
      ); */
  }

  onAdd(input: HTMLInputElement) {
    if (input.value != '') {
      this.linksService.addLinkApi(input.value)
        .pipe(
          concatMap(() => this.linksService.getLinksApi()),
        )
        .subscribe(data => {
          this.list = data;
          input.value = '';
        });
    }
  }
}
