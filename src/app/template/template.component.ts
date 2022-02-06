import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  firstName:string=''
  lastName:string=''
email:string=''
qualification:string=''

login(formValue:NgForm)
{
console.log(formValue.value);
}

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
