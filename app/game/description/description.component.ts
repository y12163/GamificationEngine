import { Component, OnInit, Input } from '@angular/core';
import { GameComponent } from '../game.component';
@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  @Input() game: GameComponent;
  @Input() user0: GameComponent;
  constructor() {}
  ngOnInit(){

  }

}
