import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { UserService } from 'src/app/core/user/user.service';


@Directive({
    // tslint:disable-next-line: directive-selector
    selector: '[showIfLogged]'
})
export class ShowIfLoggedDirective implements OnInit {

    constructor(
        private element: ElementRef<any>,
        private renderer2: Renderer2,
        private userService: UserService
    ) {}

    ngOnInit(): void {
        // tslint:disable-next-line: no-unused-expression
        !this.userService.isLogged()
        && this.renderer2.setStyle(this.element.nativeElement, 'display', 'none');
    }
}
