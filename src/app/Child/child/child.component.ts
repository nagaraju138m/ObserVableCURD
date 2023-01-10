import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit,OnChanges {

  @Input() myNumber :number;

  constructor() { }

  ngOnChanges(changes:SimpleChanges){
    const newChange : SimpleChange = changes['myNumber'];
    console.log("onchanges called previous value-> " ,newChange.previousValue);
    console.log("onchanges called current value-> " ,newChange.currentValue);
  }
  ngOnInit(): void {
    console.log("onInit method called");
  }
  ngDoCheck(){
    console.log("DoCheck method called new value-> ", this.myNumber)
  }
  ngAfterContentInit(){
    console.log("afterContentINit method called");
  }
  ngAfterContentChecked(){
    console.log("ngAfterContentChecked() method called -> ", this.myNumber);
  }
  ngAfterViewInit(){
    console.log("ngAfterViewInit() method called value is -> ", this.myNumber);
  }
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked method called value is -> ", this.myNumber);
  }
  ngOnDestroy(){
    console.log("Component is Destroyed");
  }
}
