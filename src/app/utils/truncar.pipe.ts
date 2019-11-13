import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncar'
})
export class TruncarPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (!value) {
      return '';
    }
    const limit = args[0] || 10;
    return (value.length > limit) ?
      value.substr(0, limit) + '...' : value;
  }
}
