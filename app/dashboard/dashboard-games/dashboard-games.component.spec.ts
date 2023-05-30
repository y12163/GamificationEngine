import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardGamesComponent } from './dashboard-games.component';

describe('DashboardGamesComponent', () => {
  let component: DashboardGamesComponent;
  let fixture: ComponentFixture<DashboardGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
