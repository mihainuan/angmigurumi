import { Component, Input } from '@angular/core';

@Component({
    selector: 'amg-photo',
    templateUrl: 'photo.component.html'
})

export class PhotoComponent {
    @Input() title = '';
    @Input() description = '';
    @Input() url = '';
}
