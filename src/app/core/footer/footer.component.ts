import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user/user';
import { UserService } from './../user/user.service';

@Component({
    selector: 'amg-footer',
    templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

    user$: Observable<User>; // Se termina em $ é um OBSERVABLE
    currentUser: User;
    constructor(private userService: UserService) {}

    ngOnInit(): void {
        this.user$ = this.userService.getUser();
        this.user$.subscribe(user => this.currentUser = user);
    }
}
