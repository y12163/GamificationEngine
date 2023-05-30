import { Component, OnInit } from '@angular/core';
import {users} from '../../employee';
@Component({
  selector: 'app-dashboard-badges',
  templateUrl: './dashboard-badges.component.html',
  styleUrls: ['./dashboard-badges.component.css']
})
export class DashboardBadgesComponent implements OnInit {
  user = users[0];
  constructor() { }

  ngOnInit() {
  }

}
