
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotoService } from './../photo/photo.service';
import { Photo } from '../photo/photo';
import { Observable } from 'rxjs';
import { PhotoComment } from './../photo/photo-comment';
import { AlertService } from 'src/app/shared/components/alert/alert.service';


@Component({
    templateUrl: './photo-details.component.html'
})
export class PhotoDetailsComponent implements OnInit {

    photo$: Observable<Photo>;
    comments$: Observable<PhotoComment[]>;
    photoId: number;

    constructor(
        private route: ActivatedRoute,
        private photoService: PhotoService,
        private router: Router,
        private alertService: AlertService
    ) {}

    ngOnInit(): void {
        this.photoId = this.route.snapshot.params.photoId;
        this.photo$ = this.photoService.findById(this.photoId);
    }

    remove() {
        this.photoService
        .removePhoto(this.photoId)
        .subscribe(() => {
            this.alertService.success('Photo successfully removed!');
            this.router.navigate(['']);
        },
        err => {
            console.log(err);
            this.alertService.warning('Photo could not be removed. Please try again.');
        });
    }

}
