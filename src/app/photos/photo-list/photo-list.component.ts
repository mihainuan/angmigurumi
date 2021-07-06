import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Photo } from '../photo/photo';

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
  
  //Occurs after 1st instance in Angular 
  ngOnInit(): void {
    this.photos = this.activatedRoute.snapshot.data['photos'];    
    this.debounce
    .pipe(debounceTime(420))
    .subscribe(filter => this.filter = filter);
  }

  //Exclusive for Dependency Injection (Convention/Best Practices)
  constructor(private activatedRoute: ActivatedRoute){}
  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

}
