import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { tap } from 'rxjs/operators';
import { LinksService } from '../shared/service/links.service';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {
  list$: Observable<string[]> | undefined;
  loading = true;

  constructor(private linksService: LinksService) { }

  ngOnInit(): void {
    this.list$ = this.linksService.getLinks()
      .pipe(
        tap(() => this.loading = false)
      );
  }
}
