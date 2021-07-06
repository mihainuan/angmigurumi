import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit { 
  
  //Array of photos (empty)
  photos: Photo[] = [];

  //Search string
  filter: string = '';
  hasMore: boolean = true;
  currentPage: number = 1;
  userName: string = '';
  
  //Occurs after 1st instance in Angular 
  ngOnInit(): void {
    this.userName = this.activatedRoute.snapshot.params.userName;
    this.photos = this.activatedRoute.snapshot.data['photos'];    
  }

  //Exclusive for Dependency Injection (Convention/Best Practices)
  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService){}

  load(){
    this.photoService.listFromUserPaginated(this.userName, ++this.currentPage)
    .subscribe(photos => {
      this.filter = '';
      this.photos = this.photos.concat(photos);
      if(!photos.length){
       this.hasMore = false
      }
    });
  }

}
