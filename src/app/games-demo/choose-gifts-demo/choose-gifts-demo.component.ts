import { Component } from '@angular/core';
import { gsap } from 'gsap';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-choose-gifts-demo',
  templateUrl: './choose-gifts-demo.component.html',
  styleUrls: ['./choose-gifts-demo.component.scss'],
})
export class ChooseGiftsDemoComponent {
  gifts: Array<any> = [
    {
      idx: 0,
      url: '../../../assets/demos/imgs/choose-gifts/g1-choose.png',
      left: 10,
      id: 'g1',
      delay: 1,
      duration: 6,
      click: true,
    },
    {
      idx: 1,
      url: '../../../assets/demos/imgs/choose-gifts/g2-choose.png',
      left: 85,
      id: 'g2',
      delay: 2,
      duration: 10,
      click: true,
    },
    {
      idx: 2,
      url: '../../../assets/demos/imgs/choose-gifts/g3-choose.png',
      left: 40,
      id: 'g3',
      delay: 3,
      duration: 8,
      click: true,
    },
    {
      idx: 3,
      url: '../../../assets/demos/imgs/choose-gifts/g4-choose.png',
      left: 75,
      id: 'g4',
      delay: 9,
      duration: 10,
      click: true,
    },
    {
      idx: 4,
      url: '../../../assets/demos/imgs/choose-gifts/g5-choose.png',
      left: 20,
      id: 'g5',
      delay: 15,
      duration: 7,
      click: true,
    },
    {
      idx: 5,
      url: '../../../assets/demos/imgs/choose-gifts/g6-choose.png',
      left: 60,
      id: 'g6',
      delay: 12,
      duration: 9,
      click: true,
    },
    {
      idx: 6,
      url: '../../../assets/demos/imgs/choose-gifts/g7-choose.png',
      left: 75,
      id: 'g7',
      delay: 12,
      duration: 10,
      click: true,
    },
    {
      idx: 7,
      url: '../../../assets/demos/imgs/choose-gifts/g8-choose.png',
      left: 20,
      id: 'g8',
      delay: 13,
      duration: 10,
      click: true,
    },
  ];

  isPlayGame: boolean = false;
  isFinishGame: boolean = false;

  fullname: string = '';
  phone: string = '';
  timeOutPopup: any;

  points: number = 0;

  constructor(private gameService: ServicesService) {}

  playGame() {
    if (this.gameService.validateForm(this.fullname, this.phone) === true) {
      this.isPlayGame = true;
      this.initDropDownGifts();
    } else {
      alert('Điền đầy đủ thông tin trước khi tham gia');
    }
  }

  initDropDownGifts() {
    for (let item of this.gifts) {
      gsap.to(`.${item.id}`, {
        delay: item.delay,
        duration: item.duration,
        y: 1000,
      });
    }
    // maximum 23s
    this.timeOutPopup = setTimeout(() => {
      this.isFinishGame = true;
    }, 23000);
  }

  addPoint(target: string, idx: number) {
    if (this.gifts[idx].click == true) {
      this.gifts[idx].click = false;
      this.points++;
      gsap.to(`.${target}`, {
        opacity: 0,
        duration: 1,
        onComplete: () => {
          gsap.killTweensOf(`.${target}`);
        },
      });
      if (this.points === 8) {
        clearTimeout(this.timeOutPopup);
        setTimeout(() => {
          this.isFinishGame = true;
        }, 2000);
      }
    }
  }
}
