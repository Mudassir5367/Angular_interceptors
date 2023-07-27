import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-reciever',
  templateUrl: './reciever.component.html',
  styleUrls: ['./reciever.component.scss']
})
export class RecieverComponent implements OnInit {
value:any;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.dataSource.subscribe(res=>{
      console.log(res);
      this.value = res;
    })
  }

}
