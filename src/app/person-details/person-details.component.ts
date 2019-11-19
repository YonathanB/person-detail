import { Component, Input } from '@angular/core';




interface Idetails{
  key: string;
  label: string;
  style: string;
}


@Component({
  selector: 'person-details',
  templateUrl: './person-details.component.html',
  styles: [`h1 { font-family: Lato; }`]
})
export class PersonDetailsComponent  {
  @Input() datasource: Idetails[];
}
