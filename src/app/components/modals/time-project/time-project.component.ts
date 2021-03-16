import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-time-project',
  templateUrl: './time-project.component.html',
  styleUrls: ['./time-project.component.scss'],
})
export class TimeProjectComponent implements OnInit, OnDestroy {

  public time: Date = new Date();
  public intervalId: ReturnType<typeof setInterval>;

  constructor(public modalController: ModalController) { }

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.time = new Date();
    }, 1000);
  }

  dismiss() {
    this.modalController.dismiss({
      dismissed: true
    });
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

}
