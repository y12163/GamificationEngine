import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent{

   _opened: boolean = false;

   _toggleSidebar() {
    this._opened = !this._opened;
  }

}
