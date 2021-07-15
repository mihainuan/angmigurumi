import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

const CLOUD_URL = environment.ApiUrl + '/imgs/';
@Component({
    selector: 'amg-photo',
    templateUrl: 'photo.component.html'
})

export class PhotoComponent {
    private _url = '';
    @Input() title = '';
    @Input() description = '';

    @Input() set url(url: string) {
        if (!url.startsWith('data')) {
            this._url = CLOUD_URL + url;
        } else {
            this._url = url;
        }
    }

    get url() {
        return this._url;
    }
}
