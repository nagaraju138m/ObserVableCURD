import { HttpClient } from '@angular/common/http';
import { AfterContentInit, Component, EventEmitter, Inject, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { RegisterComponent } from '../register/register.component';
import { StuServiceService } from '../Service/stu-service.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnChanges, AfterContentInit {

  property = "enter Text for 2-way data binding and property binding";

  @Output() customeve = new EventEmitter();
  fromchild="from child to parent";
  sendToParent(){
    this.customeve.emit(this.fromchild);
  }


  displayedColumns: string[] = [ "id", 'firstName', 'lastName', 'gender', 'dateOB', 'medium', 'mobileNo', 'addres','Action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private http:HttpClient,
    private dialog:MatDialog,
    private stuServ:StuServiceService) { }

  ngOnInit(): void {
    console.log("onInit method called from main");
    this.getStudents();
  }
  ngOnChanges(){
    console.log("ONChanges method called from main");
  }

  ngAfterContentInit(): void {
    console.log("afterContentINit method called");
  }

  openRegister(){
    this.dialog.open(RegisterComponent,{
      width:'30%'
    }).afterClosed().subscribe(val=>{
      if(val === 'save'){
        this.getStudents();
      }
    })
  }
  getStudents(){
    this.stuServ.getStudents().subscribe({
      next:(res)=>{
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  editStu(sdata:any){
    this.dialog.open(RegisterComponent,{
      width:'30%',
      data:sdata
    }).afterClosed().subscribe(value =>{
      if(value === 'Update'){
        this.getStudents();
      }
    })
  }
  deleteStu(id:number){
    this.stuServ.deleteStudent(id).subscribe({
      next:res=>{
        alert("Deleted Successfully");
        this.getStudents();
      },error:err=>{alert("Failed to delete the data");}
    });
  }
}
