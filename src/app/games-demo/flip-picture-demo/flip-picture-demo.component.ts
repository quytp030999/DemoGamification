import { Component } from '@angular/core';
import { gsap } from 'gsap';
import { ServicesService } from '../services.service';

export interface Gifts {
  idx: number;
  url: string;
  partner: number;
}

@Component({
  selector: 'app-flip-picture-demo',
  templateUrl: './flip-picture-demo.component.html',
  styleUrls: ['./flip-picture-demo.component.scss'],
})
export class FlipPictureDemoComponent {
  maskPicture: string = '../../../assets/demos/imgs/flip-picture/mask-flip.png';

  gifts: Array<Gifts> = [
    {
      idx: 0,
      url: '../../../assets/demos/imgs/flip-picture/g1-flip.png',
      partner: 8,
    },
    {
      idx: 1,
      url: '../../../assets/demos/imgs/flip-picture/g2-flip.png',
      partner: 9,
    },
    {
      idx: 2,
      url: '../../../assets/demos/imgs/flip-picture/g3-flip.png',
      partner: 10,
    },
    {
      idx: 3,
      url: '../../../assets/demos/imgs/flip-picture/g4-flip.png',
      partner: 11,
    },
    {
      idx: 4,
      url: '../../../assets/demos/imgs/flip-picture/g5-flip.png',
      partner: 12,
    },
    {
      idx: 5,
      url: '../../../assets/demos/imgs/flip-picture/g6-flip.png',
      partner: 13,
    },
    {
      idx: 6,
      url: '../../../assets/demos/imgs/flip-picture/g7-flip.png',
      partner: 14,
    },
    {
      idx: 7,
      url: '../../../assets/demos/imgs/flip-picture/g8-flip.png',
      partner: 15,
    },
    {
      idx: 8,
      url: '../../../assets/demos/imgs/flip-picture/g1-flip.png',
      partner: 0,
    },
    {
      idx: 9,
      url: '../../../assets/demos/imgs/flip-picture/g2-flip.png',
      partner: 1,
    },
    {
      idx: 10,
      url: '../../../assets/demos/imgs/flip-picture/g3-flip.png',
      partner: 2,
    },
    {
      idx: 11,
      url: '../../../assets/demos/imgs/flip-picture/g4-flip.png',
      partner: 3,
    },
    {
      idx: 12,
      url: '../../../assets/demos/imgs/flip-picture/g5-flip.png',
      partner: 4,
    },
    {
      idx: 13,
      url: '../../../assets/demos/imgs/flip-picture/g6-flip.png',
      partner: 5,
    },
    {
      idx: 14,
      url: '../../../assets/demos/imgs/flip-picture/g7-flip.png',
      partner: 7,
    },
    {
      idx: 15,
      url: '../../../assets/demos/imgs/flip-picture/g8-flip.png',
      partner: 7,
    },
  ];

  isPlayGame: boolean = false;
  isFinishGame: boolean = false;

  fullname: string = '';
  phone: string = '';

  countClickFlip: number = 0;
  cachingGiftFlip: any = null;
  isClick: boolean = true;
  points: number = 0;

  constructor(private gameService: ServicesService) {}

  onFlip(idx: number) {
    if (this.isClick === true) {
      gsap.to('#front' + idx, {
        duration: 0.5,
        rotationY: '+=180',
        opacity: 0,
        zIndex: 0,
      });
      gsap.to('#back' + idx, {
        duration: 0.5,
        rotationY: '+=180',
        opacity: 1,
        zIndex: 1,
      });
      this.countClickFlip++;

      if (this.countClickFlip === 1) {
        this.cachingGiftFlip = this.gifts[idx];
      } else {
        this.isClick = false;
        const gift = this.gifts[idx];
        if (gift.partner === this.cachingGiftFlip.idx) {
          this.points++;
          this.resetCachingFlip();
          if (this.points === 8) {
            setTimeout(() => {
              this.isFinishGame = true;
            }, 1000);
          }
        } else {
          setTimeout(() => {
            this.onReverseFlip(idx, this.cachingGiftFlip.idx);
          }, 1000);
        }
      }
    }
  }

  onReverseFlip(idx1: number, idx2: number) {
    gsap.to('#back' + idx1, {
      duration: 0.5,
      rotationY: '+=180',
      opacity: 0,
      zIndex: 0,
    });
    gsap.to('#front' + idx1, {
      duration: 0.5,
      rotationY: '+=180',
      opacity: 1,
      zIndex: 1,
    });
    gsap.to('#back' + idx2, {
      duration: 0.5,
      rotationY: '+=180',
      opacity: 0,
      zIndex: 0,
    });
    gsap.to('#front' + idx2, {
      duration: 0.5,
      rotationY: '+=180',
      opacity: 1,
      zIndex: 1,
    });
    this.resetCachingFlip();
  }

  resetCachingFlip() {
    this.cachingGiftFlip = null;
    this.countClickFlip = 0;
    this.isClick = true;
  }

  playGame() {
    if (this.gameService.validateForm(this.fullname, this.phone) === true) {
      this.isPlayGame = true;
    } else {
      alert('Điền đầy đủ thông tin trước khi tham gia');
    }
  }
}
