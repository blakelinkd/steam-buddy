import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-game-news',
  templateUrl: './game-news.component.html',
  styleUrls: ['./game-news.component.css']
})
export class GameNewsComponent implements OnInit {
  
  
  news! : News;
  constructor(private httpClient: HttpClient) {
    
  }
  
  ngOnInit(): void {
    this.getNews();
  }
  
  getNews() {
    this.httpClient.get<any>('/steam-api/')
    .subscribe(
      response => {
        console.log(response);
        this.news = response;
      }
      );
    }
    
  }
  
  // Generated by https://quicktype.io

export interface News {
  appnews: Appnews;
}

export interface Appnews {
  appid:     number;
  newsitems: Newsitem[];
  count:     number;
}

export interface Newsitem {
  gid:             string;
  title:           string;
  url:             string;
  is_external_url: boolean;
  author:          string;
  contents:        string;
  feedlabel:       string;
  date:            number;
  feedname:        string;
  feed_type:       number;
  appid:           number;
  tags?:           string[];
}

