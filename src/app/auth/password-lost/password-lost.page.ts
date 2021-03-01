import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password-lost',
  templateUrl: './password-lost.page.html',
  styleUrls: ['./password-lost.page.scss'],
})
export class PasswordLostPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateTo(path: string) {
    this.router.navigate([path])
  }

}
