import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'searchName'})
export class searchNamePipe implements PipeTransform {

  transform(input:string):string {
    return "";
  }
}
