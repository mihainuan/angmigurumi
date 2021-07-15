import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../user/user';
import { UserService } from '../user/user.service';
@Component({
    selector: 'amg-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    user$: Observable<User>;
    currentUser: User;

    constructor(
        private userService: UserService,
        private router: Router
        ) {
        this.user$ = userService.getUser();
        this.user$.subscribe(user => this.currentUser = user);
    }

    logout() {
        this.userService.logout();
        this.router.navigate(['']);
    }

}
