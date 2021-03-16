import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-calendar-project',
  templateUrl: './calendar-project.component.html',
  styleUrls: ['./calendar-project.component.scss'],
})
export class CalendarProjectComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss({
      dismissed: true
    });
  }

}
