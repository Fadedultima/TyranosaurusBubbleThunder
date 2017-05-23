import { PipeTransform, Pipe } from '@angular/core';
import { ICerebra } from './cerebra';

@Pipe({
    name: 'cerebraFilter'
})
 
export class CerebraFilterPipe implements PipeTransform {
    transform(value: ICerebra[], filterBy: string): ICerebra[]{
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((cerebra: ICerebra) => cerebra.cerebraName.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}