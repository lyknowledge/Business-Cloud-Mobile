import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-change-address',
  templateUrl: './user-change-address.page.html',
  styleUrls: ['./user-change-address.page.scss'],
})
export class UserChangeAddressPage implements OnInit {

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
