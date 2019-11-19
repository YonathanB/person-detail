import { Component, Input, ViewChildren, QueryList, Pipe, PipeTransform } from '@angular/core';



interface IMediaData{
images: string[]
}


interface Idetails{
  key: string;
  value: string;
  style?: string;
}



interface Ilayout{
  left: Idetails[];
  right?: Idetails[];
  mediaComponent?: IMediaData
}


@Component({
  selector: 'person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss']
})
export class PersonDetailsComponent  {
  @Input('datasource') datasource: Ilayout[];

}
@Pipe({name: 'addActions'})
export class AddActions  implements PipeTransform  {
  transform(field: any, element): void {
    console.log('**')
    for(let action in field.actions){
      element[action] = field.actions[action]
    }
  }
}