import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingService } from 'src/app/shared/components/loading/loading.service';
import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'amg-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  // Array of photos (empty)
  photos: Photo[] = [];

  // Search string
  filter = '';
  hasMore = true;
  currentPage = 1;
  userName = '';

  // Occurs after 1st instance in Angular
  ngOnInit(): void {
    // FIXME: loading bar does not stop showing
    this.loadingService.start();
    this.activatedRoute.params.subscribe(params => {
      this.userName = params.userName;
      this.photos = this.activatedRoute.snapshot.data['photos'];
    });
  }

  // Exclusive for Dependency Injection (Convention/Best Practices)
  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService,
    private loadingService: LoadingService
    ) {}

  load() {
    this.photoService.listFromUserPaginated(this.userName, ++this.currentPage)
    .subscribe(photos => {
      this.filter = '';
      this.photos = this.photos.concat(photos);
      if (!photos.length) {
       this.hasMore = false;
      }
    });
  }

}
