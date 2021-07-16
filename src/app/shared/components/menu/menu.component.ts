import { Component } from '@angular/core';

@Component({
    selector: 'amg-menu',
    templateUrl: './menu.component.html'
})
export class MenuComponent {

    isShown = false;

    toggle() {
        this.isShown = !this.isShown;
    }
}
