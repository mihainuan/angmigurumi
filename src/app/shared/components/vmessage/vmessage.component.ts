import { Component, Input } from '@angular/core';

@Component({
    selector: 'amg-vmessage',
    templateUrl: './vmessage.component.html'
})
export class VMessageComponent {
    @Input() text = '';
}
