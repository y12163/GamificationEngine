import { Component, OnInit,ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface BoardList {
  name: string;
  position: number;
  trophies: number;
  points: number;
}

const ELEMENT_DATA: BoardList[] = [
  {position: 1, name: 'Joe Johnson', trophies: 5, points: 100},
  {position: 2, name: 'Sam Williams',  trophies: 4, points: 93},
  {position: 3, name: 'Susan Long', trophies: 4, points: 89},
  {position: 4, name: 'Robert S',  trophies: 4, points: 75},
  {position: 5, name: 'Jake Wilson',  trophies: 4, points: 70},
  {position: 6, name: 'Carl D',  trophies: 3, points: 65},
  {position: 7, name: 'Greg White',  trophies: 2, points: 49},
  {position: 8, name: 'Alex Black',  trophies: 2, points: 37},
  {position: 9, name: 'Florence Cohen',  trophies: 1, points: 22},
  {position: 10, name: 'John Smith',  trophies: 0, points: 10},
];

@Component({
  selector: 'app-leaderboard0',
  templateUrl: './leaderboard0.component.html',
  styleUrls: ['./leaderboard0.component.css']
})
export class Leaderboard0Component implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'trophies', 'points'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  userdata= {position: 10, name: 'John Smith',  trophies: 0, points: 10};
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  

  addElement() {
    ELEMENT_DATA.splice(0,0,this.userdata);
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

}


