import { Pipe, PipeTransform } from '@angular/core';
import { Photo } from '../photo/photo';

@Pipe({ name: 'filterByDescription' })
export class FilterByDescription implements PipeTransform {
    
    transform(photos: Photo[], descQuery: string) {
        descQuery = descQuery
        .trim()
        .toLowerCase();

        if(descQuery){
            return photos.filter(photo => photo.description.toLowerCase().includes(descQuery))
        }else {
            return photos;
        }
    }
}