import { PipeTransform, Pipe } from '@angular/core';
import { Details } from './list.detail';

@Pipe( {
    name : 'listFilter'
})

export class ProductFilterPipe implements PipeTransform{

    transform(value : Details[],filterBy : string ): Details[]{
        filterBy = filterBy ? filterBy.toLocaleLowerCase():null;
        return filterBy ?value.filter((student : Details) =>
    student.name.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}