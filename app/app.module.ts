import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { FeaturedGamesComponent } from './game-index/featured-games/featured-games.component';
import { NewReleasesComponent } from './game-index/new-releases/new-releases.component';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule, MatMenuModule } from '@angular/material';
import { SidenavComponent } from './sidenav/sidenav.component';
import { GamesComponent } from './game-index/games/games.component';
import { GameIndexComponent } from './game-index/game-index.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GamesPipe } from './game-index/games/games.pipe';
import { DescriptionComponent } from './game/description/description.component';
import { BadgesComponent } from './game/badges/badges.component';
import { StatsComponent } from './game/stats/stats.component';



import {HttpClientModule} from '@angular/common/http';
import {MatNativeDateModule} from '@angular/material/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {DemoMaterialModule} from './leader/material-module';

import { Leaderboard1Component } from './game/leaderboard1/leaderboard1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Leaderboard0Component } from './leader/leaderboard0/leaderboard0.component';
import { LeaderboardComponent } from './leader/leaderboard/leaderboard.component';


import { EmployeeComponent } from './dashboard/employee/employee.component';
import { DashboardStatsComponent } from './dashboard/dashboard-stats/dashboard-stats.component';
import { DashboardBadgesComponent } from './dashboard/dashboard-badges/dashboard-badges.component';
import { DashboardLeaderboardComponent } from './dashboard/dashboard-leaderboard/dashboard-leaderboard.component';
import { DashboardGamesComponent } from './dashboard/dashboard-games/dashboard-games.component';
import { LeaderboardFilterComponent } from './leader/leaderboard-filter/leaderboard-filter.component';


@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    FeaturedGamesComponent,
    NewReleasesComponent,
    SidenavComponent,
    GamesComponent,
    GameIndexComponent,
    GamesPipe,
    DescriptionComponent,
    BadgesComponent,
    StatsComponent,
    Leaderboard1Component,
    DashboardComponent,
    EmployeeComponent,
    Leaderboard0Component,
    LeaderboardComponent,
    DashboardStatsComponent,
    DashboardBadgesComponent,
    DashboardLeaderboardComponent,
    DashboardGamesComponent,
    LeaderboardFilterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule, MatMenuModule,
    FormsModule, ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    RouterModule.forRoot([
      { path: '', component: GameIndexComponent },
      { path: 'game/:gameId', component: GameComponent },
      { path: 'games',component:GameIndexComponent},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'leaderboard', component:  LeaderboardComponent},
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
