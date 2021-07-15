import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { SignInComponent } from './signin/signin.component';
import { SignUpComponent } from './signup/signup.component';
import { LoginGuard } from '../core/auth/login.guard';


const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [ LoginGuard ],
        children:
        [
            {
                path: '',
                component: SignInComponent,
                data: {
                    title: 'Sign IN - AngMigurumi'
                }
            },
            {
                path: 'signup',
                component: SignUpComponent,
                data: {
                    title: 'Sign UP - AngMigurumi'
                }
            }
        ]
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class HomeRoutingModule { }
