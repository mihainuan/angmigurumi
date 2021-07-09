import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { lowerCaseCustomValidator } from 'src/app/shared/validators/lower-case.validator';

@Component({
    templateUrl: './signup.component.html'
})
export class SignUpComponent implements OnInit{

    signupForm: FormGroup;

    constructor (private formBuilder: FormBuilder){
        this.ngOnInit();
    }
    
    ngOnInit(): void {
        this.signupForm = this.formBuilder.group({
            emailAddress:['', 
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
                ]
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
}