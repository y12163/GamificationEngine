
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { games } from '../games';
import { users } from '../employee';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  users=users;
  game;
   _opened: boolean = false;
  user0;

   _toggleSidebar() {
    this._opened = !this._opened;
  }
  
  ngOnInit() {
  this.user0= users[0];
  }

}