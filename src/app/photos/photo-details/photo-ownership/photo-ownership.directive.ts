import { Directive, ElementRef, Input, OnInit, Renderer, Renderer2 } from '@angular/core';
import { UserService } from 'src/app/core/user/user.service';
import { Photo } from '../../photo/photo';


@Directive({
    // tslint:disable-next-line: directive-selector
    selector: '[photoOwnership]'
})
export class PhotoOwnershipDirective implements OnInit {

    @Input() ownedPhoto: Photo;

    constructor(
        private element: ElementRef<any>,
        private renderer2: Renderer2,
        private userService: UserService
    ) {}

    ngOnInit(): void {
        this.userService.getUser()
        .subscribe(user => {
            // tslint:disable-next-line: triple-equals
            if (!user || user.id != this.ownedPhoto.userId) {
                this.renderer2.setStyle(this.element.nativeElement, 'display', 'none');
            }
        });

    }
}
