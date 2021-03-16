import { Location } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor(private router: Router, private location: Location) { }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  nagivateBack() {
    this.location.back();
  }

  loadData(event) {
    console.log('Done');
    setTimeout(() => {
      event.target.complete();
    }, 500);
  }
}
