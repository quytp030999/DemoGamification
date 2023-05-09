import { AfterViewInit, Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-choose-gitfs',
  templateUrl: './choose-gitfs.component.html',
  styleUrls: ['./choose-gitfs.component.scss'],
})
export class ChooseGitfsComponent implements OnInit, AfterViewInit {
  widthBar: number = 0;

  gifts: Array<any> = [
    {
      idx: 0,
      url: '../../../assets/imgs/choose/banana.png',
      point: 10,
      left: 0,
      id: 'banana',
      delay: 1,
      duration: 15,
      click: true,
    },
    {
      idx: 1,
      url: '../../../assets/imgs/choose/orange.png',
      point: 10,
      left: 90,
      id: 'orange',
      delay: 4,
      duration: 19,
      click: true,
    },
    {
      idx: 2,
      url: '../../../assets/imgs/choose/guaba.png',
      point: 5,
      left: 40,
      id: 'guaba',
      delay: 3,
      duration: 24,
      click: true,
    },
    {
      idx: 3,
      url: '../../../assets/imgs/choose/banana.png',
      point: 10,
      left: 75,
      id: 'banana-1',
      delay: 9,
      duration: 30,
      click: true,
    },
    {
      idx: 4,
      url: '../../../assets/imgs/choose/orange.png',
      point: 10,
      left: 20,
      id: 'orange-1',
      delay: 10,
      duration: 21,
      click: true,
    },
    {
      idx: 5,
      url: '../../../assets/imgs/choose/guaba.png',
      point: 55,
      left: 60,
      id: 'guaba-1',
      delay: 12,
      duration: 18,
      click: true,
    },
  ];

  isCompleted: string = 'none';

  maxDelay: number = 0;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initDropDownGifts();
  }

  initDropDownGifts() {
    for (let item of this.gifts) {
      gsap.to(`.${item.id}`, {
        delay: item.delay,
        duration: item.duration,
        y: 1000,
      });
      if (this.maxDelay < item.duration) {
        this.maxDelay = item.duration + item.delay;
      }
    }
    gsap.delayedCall(this.maxDelay, () => {
      gsap.to('.popup-container', {
        display: 'block',
      });
    });
  }

  addBar(point: number, target: string, idx: number) {
    if (this.widthBar < 100) {
      if (this.gifts[idx].click == true) {
        this.widthBar += point;
        this.gifts[idx].click = false;
        gsap.to(`.${target}`, {
          opacity: 0,
          duration: 1,
          onComplete: () => {
            gsap.killTweensOf(`.${target}`);
          },
        });
        if (idx == this.gifts.length - 1 && this.widthBar == 100) {
          gsap.to('.popup-container', {
            display: 'block',
          });
        }
        if (this.widthBar > 100) {
          this.widthBar = 100;
        }
      }
    }
  }
}
