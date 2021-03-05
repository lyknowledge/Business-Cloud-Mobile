import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.page.html',
  styleUrls: ['./user-info.page.scss'],
})
export class UserInfoPage implements OnInit {

  constructor(private router: Router, private location: Location) { }

  ngOnInit() {
  }

  navigateTo(path: string) {
    this.router.navigate([path])
  }

  nagivateBack() {
    this.location.back()
  }
}
