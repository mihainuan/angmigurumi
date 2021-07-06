import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit { 
  
  //Array of photos
  photos: Photo[] = [];

  //Exclusive for Dependency Injection (Convention/Best Practices)
  constructor(
    private photoService: PhotoService,
    private activatedRoute: ActivatedRoute){}

  //Occurs after 1st instance in Angular 
  ngOnInit(): void {
    const userName = this.activatedRoute.snapshot.params.userName;
    this.photoService.listFromUser(userName)
      .subscribe(photos => {
        this.photos = photos
        },
        err => console.log("Erro -> ",err.message)
      );
  }

}
