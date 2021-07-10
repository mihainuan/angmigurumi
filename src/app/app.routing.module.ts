import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth/auth.guard';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './home/signin/signin.component';
import { SignUpComponent } from './home/signup/signup.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { PhotoListResolver } from './photos/photo-list/photo-list-resolver';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';


//TODO: Organizando Rotas e Implementando Lazy Loading
const routes: Routes = [
    { 
        path: '', 
        component: HomeComponent,
        canActivate: [ AuthGuard ],
        children: [
            {
                path: '',
                component: SignInComponent
            },
            {
                path: 'signup',
                component: SignUpComponent
            }
        ]
    },
    { 
        path: 'signup', 
        component: SignUpComponent
    },
    { 
        path: 'p/:userName', 
        component: PhotoListComponent, 
        resolve: { photos: PhotoListResolver} 
    },
    { 
        path: 'p/form', 
        component: PhotoFormComponent
    },
    { 
        path: '**', 
        component: NotFoundComponent 
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {

}