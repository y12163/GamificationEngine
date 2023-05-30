import { Component, OnInit,Input } from '@angular/core';
import { games } from '../../games';
import {FormGroup, FormControl} from '@angular/forms';
import { GameIndexComponent } from '../game-index.component';
@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  games = games
  cateSelected;
  cateAll;
  cateForm: FormGroup;
  @Input() user0: GameIndexComponent;
  categories = [
    {category:"All"},
    {category:"Business"},
    {category:"Training"},
    {category:"Finance"},
    {category:"Sales"},
 ];
  constructor() { }

  ngOnInit() {
  
    this.cateForm = new FormGroup({
      cate: new FormControl(),
    })
    this.cateSelected=this.categories[0];
    this.cateAll="All";
  }

}
