import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { PhotoService } from '../app/shared/service/photo.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  public list$: Observable<any[]> | undefined;
  loading = true;
  constructor(private photoService: PhotoService) { }
  ngOnInit(): void {
    this.list$ = this.photoService.getPhotos()
      .pipe(
        tap(() => this.loading = false)
      );
  }

}
