import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  detectedValueInParent:any;
  valueFromChild:any;
  value  = 'this is test value';
  date = new Date()
  friends =[
    {
       "id":0,
       "name":"Verna Gonzales"
    },
    {
       "id":1,
       "name":"Natalia Odom"
    },
    {
       "id":2,
       "name":"Avis Roach"
    }
    ]
  title = 'interceptor';
  constructor(private dataService: DataService){
  }
  ngOnInit(){
    // interceptors header 

    // this.dataService.getData().subscribe(res=>{
    //   console.log(res);
    // })
    // this.dataService.getPosts().subscribe(res=>{
    //   console.log(res);
    // })
}
detectedValue(event:any){
  console.log(event.target.value);
  this.detectedValueInParent = event.target.value;
}
selectedValue(value:any){
  this.valueFromChild = value;
}


}
