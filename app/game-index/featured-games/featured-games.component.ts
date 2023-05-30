import { Component, OnInit,Input } from '@angular/core';
import { games } from '../featured-games';
import { GameIndexComponent } from '../game-index.component';
@Component({
  selector: 'app-featured-games',
  templateUrl: './featured-games.component.html',
  styleUrls: ['./featured-games.component.css']
})
export class FeaturedGamesComponent implements OnInit {
  @Input() user0:  GameIndexComponent;
  games = games;
  constructor() { }

  ngOnInit() {
  }

}
