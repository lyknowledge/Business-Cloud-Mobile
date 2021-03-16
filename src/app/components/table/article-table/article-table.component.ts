import { Component, Input, OnInit } from '@angular/core';
import { TArticles } from 'src/types/articles-type';

@Component({
  selector: 'app-article-table',
  templateUrl: './article-table.component.html',
  styleUrls: ['./article-table.component.scss'],
})
export class ArticleTableComponent implements OnInit {

  @Input() articles: Array<TArticles>;

  constructor() { }

  ngOnInit() { }

}
