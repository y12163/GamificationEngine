import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { games } from '../games';
import { users } from '../employee';
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  users=users;
  game;
   _opened: boolean = false;
  user0;

   _toggleSidebar() {
    this._opened = !this._opened;
  }
  
  constructor(
    private route: ActivatedRoute,
    ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
    this.game = games[+params.get('gameId')];
  });
  this.user0= users[1];
  }

}
