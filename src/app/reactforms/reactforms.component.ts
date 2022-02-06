import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';





@Component({
  selector: 'app-reactforms',
  templateUrl: './reactforms.component.html',
  styleUrls: ['./reactforms.component.css'],
  
})
export class ReactformsComponent implements OnInit {


  RegistrationForm= new FormGroup({
    FirstName:new FormControl(''),
    LastName:new FormControl(''),
    Email:new FormControl(''),
    Password:new FormControl('')
  
  
  })
  onSubmit()
  {
    console.log(this.RegistrationForm.value)
  }
  
  onReset()
  {
    this.RegistrationForm.reset()
  }



  

  constructor(public router: Router) { }

  ngOnInit(): void {
    
  }

}
