import { NgModule } from '@angular/core';
import { PhotoDetailsComponent } from './photo-details.component';
import { CommonModule } from '@angular/common';
import { PhotoModule } from '../photo/photo.module';
import { PhotoCommentsComponent } from './photo-comments/photo-comments.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { VmessageModule } from 'src/app/shared/components/vmessage/vmessage.module';
import { PhotoOwnershipDirective } from './photo-ownership/photo-ownership.directive';
import { ShowIfLoggedModule } from 'src/app/shared/directives/show-if-logged/show-if-logged.module';

@NgModule({
    declarations: [
        PhotoDetailsComponent,
        PhotoCommentsComponent,
        PhotoOwnershipDirective
    ],
    exports: [
        PhotoDetailsComponent,
        PhotoCommentsComponent
    ],
    imports: [
        CommonModule, // Is a good practice to always include Common Module in our custom Modules
        PhotoModule, // Fotos
        RouterModule, // Roteador
        ReactiveFormsModule, // Módulo de Forms Reativos
        VmessageModule, // Módulo de Mensagens de (erro) validação
        ShowIfLoggedModule // Diretiva para exibir apenas se o usuário estiver logado
    ]
})
export class PhotoDetailsModule { }
