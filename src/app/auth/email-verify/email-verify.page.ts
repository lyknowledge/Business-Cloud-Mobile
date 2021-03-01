import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email-verify',
  templateUrl: './email-verify.page.html',
  styleUrls: ['./email-verify.page.scss'],
})
export class EmailVerifyPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateTo(path: string) {
    this.router.navigate([path])
  }

}
