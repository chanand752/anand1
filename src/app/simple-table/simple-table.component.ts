import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-simple-table',
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.css']
})

export class SimpleTableComponent implements OnInit {
names = ['Anand Babu', 'Sri Ram', 'Krishna']

data1 =[{name1:"Anand Babu", age:"25", place: "Tenali"},{name1:"Sri Ram", age:"25", place: "Palakollu"},{name1:"Krishna", age:"25", place: "Tenali"}]



title = 'pipesconcept learning';    
  todaydate = new Date(); 
  months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun']; 
  person ={
    "firstname":"john",
    "lastname":"Doe"
  }

  


  constructor(public router: Router) { }

  ngOnInit(): void {
    
  }

}
