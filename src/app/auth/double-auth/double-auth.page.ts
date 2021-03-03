import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-double-auth',
  templateUrl: './double-auth.page.html',
  styleUrls: ['./double-auth.page.scss'],
})
export class DoubleAuthPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateTo(path: string) {
    this.router.navigate([path])
  }

}
