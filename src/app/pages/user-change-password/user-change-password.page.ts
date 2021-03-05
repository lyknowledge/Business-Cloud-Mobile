import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-change-password',
  templateUrl: './user-change-password.page.html',
  styleUrls: ['./user-change-password.page.scss'],
})
export class UserChangePasswordPage implements OnInit {

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
