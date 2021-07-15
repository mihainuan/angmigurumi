import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { AlertService } from 'src/app/shared/components/alert/alert.service';

import { PhotoComment } from './../../photo/photo-comment';
import { PhotoService } from './../../photo/photo.service';
@Component({
    selector: 'amg-photo-comments',
    templateUrl: './photo-comments.component.html',
    styleUrls: ['photo-comments.css']
})

export class PhotoCommentsComponent implements OnInit {

    @Input() photoId: number;
    commentForm: FormGroup;
    comments$: Observable<PhotoComment[]>;

    constructor(
        private photoService: PhotoService,
        private formBuilder: FormBuilder,
        private alertService: AlertService
        ) {}

    ngOnInit(): void {
        this.comments$ = this.photoService.getComments(this.photoId);
        this.commentForm = this.formBuilder.group({
            comment: ['', Validators.maxLength(300)]
        });
    }

    save() {
        const comment = this.commentForm.get('comment').value as string;
        this.comments$ = this.photoService
            .addComment(this.photoId, comment)
            .pipe(switchMap(() => this.photoService.getComments(this.photoId)))
            .pipe(tap(() => {
                this.commentForm.reset();
                this.alertService.success('Commend sent successfully!', true);
            }));
    }
}
