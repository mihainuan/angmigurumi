import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { SignUpService } from './signup.service';

import { debounceTime, first, map, switchMap } from 'rxjs/operators'

@Injectable({ providedIn: 'root'})
export class ExistingUserNameValidatorService {

    constructor(private signUpService: SignUpService) {}

    checkExistingUserName() {
        return (control: AbstractControl) => {
            return control
            .valueChanges
            .pipe(debounceTime(300))
            .pipe(switchMap(userName =>  
                this.signUpService.checkExistingUsername(userName)
            ))
            .pipe(map(isTaken => isTaken ? { userNameTaken: true } : null ))
            .pipe(first());
        }
    }
}