import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], term?: any, key?: string): any {
    if (key) {
      return term
        ? items.filter(item => item[key].toLowerCase().indexOf(term.toLowerCase()) !== -1)
        : items;
    } else {
      return term
        ? items.filter(item => item.toLowerCase().indexOf(term.toLowerCase()) !== -1)
        : items;
    }
  }
}
