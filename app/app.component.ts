import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  
  private _opened: boolean = false;

  private _toggleSidebar() {
    this._opened = !this._opened;
  }
}
