import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-style',
  templateUrl: './class-style.component.html',
  styleUrls: ['./class-style.component.scss']
})
export class ClassStyleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  mltClasses = {
    classA:true,
    classB:true,
    classC:true
  }
  
  mltStyle = {
    background:'orange',
    border:'5px solid green'
}

}
