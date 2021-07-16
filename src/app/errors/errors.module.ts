import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { GlobalErrorHandler } from './global-error-handler/global-error-handler';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NotFoundComponent],
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler // Quando occorrer um erro, NÃO use EH do Angular, use o MEU!
    }
  ]
})
export class ErrorsModule { }
