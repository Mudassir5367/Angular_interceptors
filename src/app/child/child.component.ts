import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  
@Output() selectedValueToParent = new EventEmitter();
 @Input() sendFriendsToChild:any;
 @Input() selected:any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.sendFriendsToChild);
  }
  selectedValue(event:any){
    this.selectedValueToParent.emit(event.target.value);
  }

} 
