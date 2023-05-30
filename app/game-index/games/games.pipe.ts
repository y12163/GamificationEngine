
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'games'
})
export class GamesPipe implements PipeTransform {
    transform(category: string, cat_selected: string) {
        if (category == cat_selected) {
            return category;
        }
        else {
            return cat_selected;
        }
        
    }
}