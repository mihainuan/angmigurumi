import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';


@Component({
    templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit{

    loginForm: FormGroup;
    @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private router: Router
    ){}

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    login() {        
        console.log("Go-To -> Authentication...");

        const userName = this.loginForm.get('userName').value;
        const password = this.loginForm.get('password').value;
        
        this.authService
        .authenticate(userName,password)
        .subscribe( 
            () => this.router.navigate(['p', userName]), // p/username
        err => {
            this.loginForm.reset(); //Clear Form
            this.userNameInput.nativeElement.focus(); //Element from DOM
            console.log(err.error.message);
            alert(err.error.message); //Msg on screen
        });
        
    }

}