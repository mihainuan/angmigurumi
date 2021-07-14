import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoFormComponent } from './photo-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { VMessageComponent } from '../../shared/components/vmessage/vmessage.component';
import { VmessageModule } from '../../shared/components/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';
import { PhotoModule } from '../photo/photo.module';

@NgModule({
    declarations: [ PhotoFormComponent ],
    imports: [ 
        CommonModule,
        ReactiveFormsModule,
        VmessageModule,
        FormsModule,
        RouterModule,
        PhotoModule
    ]
})
export class PhotoFormModule {

}