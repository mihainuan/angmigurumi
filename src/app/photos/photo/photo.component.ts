import { Component, Input } from '@angular/core';

const CLOUD_URL = 'http://localhost:3000/imgs/'
@Component({
    selector: 'amg-photo',
    templateUrl: 'photo.component.html'
})

export class PhotoComponent {
    private _url = '';
    @Input() title = '';
    @Input() description = '';
    @Input() set url(url: string) {
        if(!url.startsWith('data')){
            // FIXME: Adequar carregamento de foto
            // this.url = CLOUD_URL + url;
        }
        this._url = url;
    }
    get url(){
        return this._url;
    }
}
