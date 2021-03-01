import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public _segment: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateTo(path: string) {
    this.router.navigate([path])
  }

  segmentChanged(event) {
    this._segment = event.detail.value;
  }
}
