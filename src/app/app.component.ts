import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //Array of photos
  photos = 
  [
    {
      URL:'https://i.imgur.com/C2F5Y6X.jpeg',
      description:'Yoshi Amigurumi',
      title:'Yoshi Amigurumi'
    },
    {
      URL:'https://i.imgur.com/dUkgQMN.jpeg',
      description:'Please Wash your Hands',
      title:'Doctor'
    },
    {
      URL:'https://i.imgur.com/GFv5bBP.jpeg',
      description:'Amigurumi for my SILs baby due in a couple of months!',
      title:'Amigurumi Baby'
    }
  ]
}
