import { Component, OnInit } from '@angular/core';
import { users } from '../employee';
@Component({
  selector: 'app-game-index',
  templateUrl: './game-index.component.html',
  styleUrls: ['./game-index.component.css']
})
export class GameIndexComponent implements OnInit{
  users=users;
  _opened: boolean = false;
  user0;
  _toggleSidebar() {
    this._opened = !this._opened;
  }
  ngOnInit() {

  this.user0= users[1];
  }

}
