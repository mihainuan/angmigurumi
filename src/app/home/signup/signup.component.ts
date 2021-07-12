import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';
import { lowerCaseCustomValidator } from 'src/app/shared/validators/lower-case.validator';
import { ExistingUserNameValidatorService } from './existing-user.validator.service';
import { NewUser } from './new-user';
import { SignUpService } from './signup.service';

@Component({
    templateUrl: './signup.component.html',
    providers: [ ExistingUserNameValidatorService ]
})
export class SignUpComponent implements OnInit, AfterViewInit{

    signupForm: FormGroup;
    @ViewChild('emailInput') emailInput: ElementRef<HTMLInputElement>;

    constructor (
        private formBuilder: FormBuilder,
        private existingUserNameValidatorService: ExistingUserNameValidatorService,
        private signUpService: SignUpService,
        private router: Router ,
        private platformDetectorService: PlatformDetectorService
        ){
        this.ngOnInit();
    }
    
    ngOnInit(): void {
        this.signupForm = this.formBuilder.group({
            email:['', 
                [
                    Validators.required,
                    Validators.email
                ]
            ],
            fullName:['', 
                [
                    Validators.required,
                    Validators.minLength(2),
                    Validators.maxLength(40)
                ]
            ],
            userName:['', 
                [
                    Validators.required,
                    lowerCaseCustomValidator,
                    Validators.minLength(2),
                    Validators.maxLength(30)
                ],
                this.existingUserNameValidatorService.checkExistingUserName()
            ],
            password:['', 
                [
                    Validators.required,
                    Validators.minLength(6),
                    Validators.maxLength(12)
                ]
            ],
        })
    }
    
    ngAfterViewInit(): void {
        this.platformDetectorService.isPlatformBrowser()
        && this.emailInput.nativeElement.focus();
    }

    signup(){
        const newUser = this.signupForm.getRawValue() as NewUser;
        this.signUpService
        .signUp(newUser)
        .subscribe(
            () => this.router.navigate(['']))
            err => console.log(err.message)
    }
}