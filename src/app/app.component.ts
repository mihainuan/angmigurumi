import { Component } from '@angular/core';
import { PhotoService } from './photos/photo/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //Array of photos
  photos: any[] = []
  
  constructor(photoService: PhotoService){
      photoService
    .listFromUser('flavio')
      .subscribe(photos => {
        this.photos = photos
        },
        err => console.log("Erro -> ",err.message)
      );
  }
}
