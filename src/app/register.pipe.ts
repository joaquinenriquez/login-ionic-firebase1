import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'register'
})
export class RegisterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
