import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameNewsItemComponent } from './game-news-item.component';

describe('GameNewsItemComponent', () => {
  let component: GameNewsItemComponent;
  let fixture: ComponentFixture<GameNewsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameNewsItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameNewsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
