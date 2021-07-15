import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    this.activatedRoute.params.subscribe(params => {
      alert('Welcome to ' + params.userName + '\'s list!');
      this.userName = params.userName;
      this.photos = this.activatedRoute.snapshot.data['photos'];
    });
  }

  // Exclusive for Dependency Injection (Convention/Best Practices)
  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService) {}

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
