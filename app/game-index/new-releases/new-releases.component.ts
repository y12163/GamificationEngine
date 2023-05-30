import { Component, OnInit,Input} from '@angular/core';
import { GameIndexComponent } from '../game-index.component';
import { games } from '../../games';
@Component({
  selector: 'app-new-releases',
  templateUrl: './new-releases.component.html',
  styleUrls: ['./new-releases.component.css']
})
export class NewReleasesComponent implements OnInit {
  @Input() user0: GameIndexComponent;
  games = games;
  newRelease;
  constructor() { }

  ngOnInit() {
    this.newRelease = games.slice(0, 3);
  }

}
