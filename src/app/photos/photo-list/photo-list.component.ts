import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { concat, Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit, OnDestroy { 
  
  //Array of photos (empty)
  photos: Photo[] = [];

  //Search string
  filter: string = '';
  debounce: Subject<string> = new Subject<string>();
  hasMore: boolean = true;
  currentPage: number = 1;
  userName: string = '';
  
  //Occurs after 1st instance in Angular 
  ngOnInit(): void {
    this.userName = this.activatedRoute.snapshot.params.userName;
    this.photos = this.activatedRoute.snapshot.data['photos'];    
    this.debounce
    .pipe(debounceTime(420))
    .subscribe(filter => this.filter = filter);
  }

  //Exclusive for Dependency Injection (Convention/Best Practices)
  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService){}


  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

  load(){
    this.photoService.listFromUserPaginated(this.userName, ++this.currentPage)
    .subscribe(photos => {
      this.photos = this.photos.concat(photos);
      if(!photos.length){
       this.hasMore = false
      }
    });
  }

}
