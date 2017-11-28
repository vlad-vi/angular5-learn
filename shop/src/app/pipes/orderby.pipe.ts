import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: Array<any>, key: string, desc: boolean = false) {
    return value.sort(function(a, b) {
      const x = a[key]; const y = b[key];
      return ((x < y) ? (desc ? -1 : 1) : ((x > y) ? (desc ? 1 : -1) : 0));
    });
  }
}
