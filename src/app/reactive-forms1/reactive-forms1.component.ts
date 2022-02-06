import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, PatternValidator, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { Router } from '@angular/router';




@Component({
  selector: 'app-reactive-forms1',
  templateUrl: './reactive-forms1.component.html',
  styleUrls: ['./reactive-forms1.component.css']
})


export class ReactiveForms1Component implements OnInit {

   employee_details! : FormGroup;



  constructor(public router: Router) { }

  ngOnInit(): void {
    this.  employee_details= new FormGroup({
      'employee_name':new FormControl('',[Validators.maxLength(10),Validators.minLength(4),Validators.pattern('[a-zA-Z]+')]),
      'salary':new FormControl('',[Validators.pattern('[0-9]+')]),
      'qualification':new FormControl(),
      'email':new FormControl('',Validators.email),
      'password':new FormControl('',Validators.maxLength(8))
    })
  }
  onclick()
  {
    console.log(this. employee_details.value);
  }
  reset()
  {
    console.log(this.employee_details.reset());
  }
 

}
