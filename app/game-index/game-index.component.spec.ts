import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameIndexComponent } from './game-index.component';

describe('GameIndexComponent', () => {
  let component: GameIndexComponent;
  let fixture: ComponentFixture<GameIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
