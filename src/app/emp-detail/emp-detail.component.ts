import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp-detail',
  templateUrl: './emp-detail.component.html',
  styleUrls: ['./emp-detail.component.css']
})
export class EmpDetailComponent implements OnInit {

  constructor() { }

  newEmployeeClicked = false;

  employees = [
    { name: 'Kevin', position: 'Front-End Dev'},
    { name: 'Michael', position: 'Recruiter Manager'},
    { name: 'Neil', position: 'Bar Tender'}
  ];

  color;

  model: any = {};
  model2: any = {};

  myValue;

  ngOnInit() {

  }

  addEmployee() {
    this.employees.push(this.model);
    this.model = {};
  }

  deleteEmployee(i) {
    this.employees.splice(i,1);
    console.log(i);
  }

  editEmployee(editEmployeeInfo) {
    this.model2.name = this.employees[editEmployeeInfo].name;
    this.model2.position = this.employees[editEmployeeInfo].position;
    this.myValue = editEmployeeInfo;
  }

  updateEmployee() {
    const editEmployeeInfo = this.myValue;
    for (let i = 0; i < this.employees.length; i++) {
      if (i === editEmployeeInfo) {
        this.employees[i] = this.model2;
        this.model2 = {};
      }
    }
  }





  addNewEmployeeBtn() {
    this.newEmployeeClicked = !this.newEmployeeClicked;
  }

   changeColorOne() {
     this.color = !this.color;
     if (this.color) {
       return '#ffffff';
     } else {
      return '#f6f6f6';
     }
  }

}
