import { Component, OnInit } from '@angular/core';

const data =  {
    "id":1,
  "first_name":"Phyllys",
  "last_name":"Foystone",
  "email":"pfoystone0@marriott.com",
  "gender":"Female",
  "ip_address":"204.69.238.4"
}


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  
  name = 'Angular';
  personData;


  ngOnInit(): void {
    this.personData = {
      left: [{
key: "id",
value: data.id
      },{
        key: "First Name",
        value: data.first_name
      },{
        key: "Last Name",
        value: data.last_name
      },{
        key: "Email",
        value: data.email,
        style:{
          "font-weight": "bold",
          "color": "blue",
          "cursor": "pointer"
        },
        actions:{
          onclick: ()=>{
            alert('Hey, you can even pass an event dynamically :P')
          }
        }
      }],
      right:[{
        key: "Ip address",
        value: data.ip_address
      },{
        key: "Gender",
        value: data.gender,
        style: {
          "color": "red"
        }
      }

    ]
  }
}


