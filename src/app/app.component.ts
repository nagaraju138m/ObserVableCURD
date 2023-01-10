import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  fromChild:any;
  title = 'TASK Two';
  private myNumber:number = 24;

  get counter(){
    return this.myNumber;
  }
  set counter(value){
  this.myNumber = value;
  }
  add(){
    this.counter++;
  }
  sub(){
    this.counter--;
  }
  updatedata(d:any){
    this.fromChild = d;
  }
}
