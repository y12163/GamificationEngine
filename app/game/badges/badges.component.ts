import { Component, OnInit, Input } from '@angular/core';
import { GameComponent } from '../game.component';
@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.css']
})
export class BadgesComponent implements OnInit {
  @Input() game: GameComponent;
  @Input() user0: GameComponent;
  constructor() { }

  ngOnInit() {
  }

}
