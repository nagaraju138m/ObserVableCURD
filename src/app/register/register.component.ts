import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  mediumsList = ["EM", "TM", "HIN"]
  registerForm !:FormGroup;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName:['', Validators.required],
      lastName:['', Validators.required],
      gender:['',Validators.required],
      dateOB:['',Validators.required],
      medium:['',Validators.required],
      mobileNo:['',Validators.required],
      addres:['',Validators.required]
    })
  }
}
