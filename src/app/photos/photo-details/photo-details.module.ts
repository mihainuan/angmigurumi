import { NgModule } from '@angular/core';
import { PhotoDetailsComponent } from './photo-details.component';
import { CommonModule } from '@angular/common';
import { PhotoModule } from '../photo/photo.module';
import { PhotoCommentsComponent } from './photo-comments/photo-comments.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { VmessageModule } from 'src/app/shared/components/vmessage/vmessage.module';

@NgModule({
    declarations: [
        PhotoDetailsComponent,
        PhotoCommentsComponent
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
        VmessageModule // Módulo de Mensagens de (erro) validação
    ]
})
export class PhotoDetailsModule { }
