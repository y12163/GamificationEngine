import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderboardFilterComponent } from './leaderboard-filter.component';

describe('LeaderboardFilterComponent', () => {
  let component: LeaderboardFilterComponent;
  let fixture: ComponentFixture<LeaderboardFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaderboardFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderboardFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
