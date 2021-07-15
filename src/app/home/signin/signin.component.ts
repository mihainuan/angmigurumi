import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';


@Component({
    templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit, AfterViewInit {

    loginForm: FormGroup;
    @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private router: Router,
        private platformDetectorService: PlatformDetectorService,
        private titleService: Title
    ) {}

    ngOnInit(): void {
        // this.titleService.setTitle('Login - AngMigurumi');
        this.loginForm = this.formBuilder.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    ngAfterViewInit(): void {
        // tslint:disable-next-line: no-unused-expression
        this.platformDetectorService.isPlatformBrowser() &&
        this.userNameInput.nativeElement.focus();
    }

    login() {
        const userName = this.loginForm.get('userName').value;
        const password = this.loginForm.get('password').value;
        this.authService
        .authenticate(userName, password)
        .subscribe(
            () => this.router.navigate(['user', userName]), // user/username
        err => {
            this.loginForm.reset(); // Clear Form
            // tslint:disable-next-line: no-unused-expression
            this.platformDetectorService.isPlatformBrowser() &&
            this.userNameInput.nativeElement.focus(); // Element from DOM
            console.log(err.error.message);
            alert(err.error.message); // Msg on screen
        });
    }
}
