import { Component, OnInit } from '@angular/core';
import { users } from '../../employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor() { }
  users = users
  ngOnInit() {
  }

}
