import { Component, OnInit, Input } from '@angular/core';
import { Newsitem } from '../game-news/game-news.component';

@Component({
  selector: 'app-game-news-item',
  templateUrl: './game-news-item.component.html',
  styleUrls: ['./game-news-item.component.css']
})
export class GameNewsItemComponent implements OnInit {


  @Input() newsItem! : Newsitem;

  
  constructor() { }

  ngOnInit(): void {
  }

}
