import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.scss']
})
export class SenderComponent implements OnInit {

  constructor(private dataService: DataService, private route:Router) { }

  ngOnInit(): void {
  }
  text=''
  data:any
  test(inputValue:any){
    console.log(inputValue);
    this.dataService.data(inputValue);
    this.route.navigate(['/rec']);
    
  }

}
