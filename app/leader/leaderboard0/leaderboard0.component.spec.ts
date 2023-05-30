import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Leaderboard0Component } from './leaderboard0.component';

describe('Leaderboard0Component', () => {
  let component: Leaderboard0Component;
  let fixture: ComponentFixture<Leaderboard0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Leaderboard0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Leaderboard0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
