import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { UserService } from 'src/app/core/user/user.service';
import * as StackTrace from 'stacktrace-js';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler{

    constructor (private injector: Injector) {}

    handleError(error: any): void {
        console.log('# Passou em handleError');
        const location = this.injector.get(LocationStrategy);
        const userService = this.injector.get(UserService);

        const url = location instanceof PathLocationStrategy
            ? location.path()
            : '';

        const message = error.message
            ? error.message :
            error.toString();

            StackTrace
            .fromError(error)
            .then(stackFrames => {
                console.log(error);
                const stackAsString = stackFrames
                .map(sf => sf.toString())
                .join('\n');
                console.log(message);
                console.log(stackAsString);
                console.log('O que sera enviado ao servidor :::: ');
                console.log( { message, url, userName: userService.getUserName(), stack: stackAsString });
            });
        throw error;
    }
}
