import { Component, Input } from '@angular/core';

@Component({
    selector: 'amg-card',
    templateUrl: './card.component.html'
})
export class CardComponent {
    @Input() title = '';
}
