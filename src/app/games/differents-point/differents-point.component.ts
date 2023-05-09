import { Component } from '@angular/core';

@Component({
  selector: 'app-differents-point',
  templateUrl: './differents-point.component.html',
  styleUrls: ['./differents-point.component.scss'],
})
export class DifferentsPointComponent {
  points: number = 0;
  totalPoint: number = 4;

  pointsGame: Array<{
    idReal: String;
    classReal: String;
    idFake: String;
    classFake: String;
    classMask: string;
    display: String;
    idx: number;
  }> = [
    {
      idReal: 'elipse-2-1',
      classReal: 'elipse-2-1',
      idFake: 'elipse-1-1',
      classFake: 'elipse-1-1',
      classMask: 'mask-circle-1',
      display: 'none',
      idx: 0,
    },
    {
      idReal: 'elipse-2-2',
      classReal: 'elipse-2-2',
      idFake: 'elipse-1-2',
      classFake: 'elipse-1-2',
      classMask: 'mask-circle-2',
      display: 'none',
      idx: 1,
    },
    {
      idReal: 'elipse-2-3',
      classReal: 'elipse-2-3',
      idFake: 'elipse-1-3',
      classFake: 'elipse-1-3',
      classMask: 'mask-circle-3',
      display: 'none',
      idx: 2,
    },
    {
      idReal: 'elipse-2-4',
      classReal: 'elipse-2-4',
      idFake: 'elipse-1-4',
      classFake: 'elipse-1-4',
      classMask: 'mask-circle-4',
      display: 'none',
      idx: 3,
    },
  ];

  isCompleted: string = 'none';

  choosePoint(idx: number) {
    if (this.points < 4) {
      this.pointsGame[idx].display = 'block';
      this.points += 1;
      if (this.points == 4) {
        setTimeout(() => {
          this.isCompleted = 'block';
        }, 1000);
      }
    }
  }

  onClickCongrats() {
    this.isCompleted = 'none';
  }
}
