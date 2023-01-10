import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StuServiceService } from '../Service/stu-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {

  mediumsList = ["EM", "TM", "HIN"]
  registerForm !:FormGroup;
  actionBtn:string = "Save";
  constructor(
    @Inject(MAT_DIALOG_DATA) public editData:any,
    private formBuilder:FormBuilder,
     private stuServ:StuServiceService,
     private dialogclo:MatDialogRef<RegisterComponent>) { }

  ngOnInit(): void {
    console.log("Register is initiated");
    this.registerForm = this.formBuilder.group({
      firstName:['', Validators.required],
      lastName:['', Validators.required],
      gender:['',Validators.required],
      dateOB:['',Validators.required],
      medium:['',Validators.required],
      mobileNo:['',Validators.required],
      addres:['',Validators.required]
    })
    if(this.editData){
      this.actionBtn = "Update";
      this.registerForm.controls['firstName'].setValue(this.editData.firstName);
      this.registerForm.controls['lastName'].setValue(this.editData.lastName);
      this.registerForm.controls['gender'].setValue(this.editData.gender);
      this.registerForm.controls['dateOB'].setValue(this.editData.dateOB);
      this.registerForm.controls['medium'].setValue(this.editData.medium);
      this.registerForm.controls['mobileNo'].setValue(this.editData.mobileNo);
      this.registerForm.controls['addres'].setValue(this.editData.addres);
    }
  }
  AddStu(){
    if(!this.editData){
      if(this.registerForm.valid){
        this.stuServ.addStudent(this.registerForm.value)
        .subscribe({
          next:(res)=>{
            alert("Student added Successfully");
            this.dialogclo.close('save');
          },
          error:err=>{
            alert("Failed to add student");
          }
        });
      }
      }
      else{
        this.updateStudent();
    }
  }
  updateStudent(){
        this.stuServ.updateStudent(this.registerForm.value, this.editData.id)
        .subscribe({
          next:res=>{
            alert("Student Updated successfully");
            this.dialogclo.close('Update')
          },error:()=>{
            alert("failed to update");
          }
        });
  }
  ngOnDestroy(){
    console.log("register MOdel Destroyed");
  }
}
