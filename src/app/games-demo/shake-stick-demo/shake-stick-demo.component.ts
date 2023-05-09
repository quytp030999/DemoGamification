import { ServicesService } from './../services.service';
import { Component } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-shake-stick-demo',
  templateUrl: './shake-stick-demo.component.html',
  styleUrls: ['./shake-stick-demo.component.scss'],
})
export class ShakeStickDemoComponent {
  isPlayGame: boolean = false;
  isFinishGame: boolean = false;

  fullname: string = '';
  phone: string = '';

  constructor(private gameService: ServicesService) {}

  initCircleClick() {
    gsap.to('.circle-click', {
      scale: 1.5,
      opacity: 0.2,
      transformOrigin: '50% 50%',
      repeat: -1,
      ease: 'power1.easeOut',
      duration: 1,
      delay: 0.5,
    });
  }

  playGame() {
    if (this.gameService.validateForm(this.fullname, this.phone) === true) {
      this.isPlayGame = true;
      this.initCircleClick();
    } else {
      alert('Điền đầy đủ thông tin trước khi tham gia');
    }
  }

  onShakeBox() {
    gsap.to('.circle-click', {
      scale: 0,
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        gsap.killTweensOf('.circle-click');
        gsap.to('.gifts', {
          x: 20,
          repeat: 30,
          duration: 0.1,
          yoyo: true,
          onComplete: () => {
            gsap.to('.gifts', {
              x: 0,
            });
          },
        });
        gsap.to('.boxGift', {
          x: 20,
          repeat: 30,
          duration: 0.1,
          yoyo: true,
          onComplete: () => {
            gsap.to('.boxGift', {
              x: 0,
              onComplete: () => {
                gsap.to('.gift-receive', {
                  zIndex: 2,
                  scale: 2,
                  opacity: 1,
                  duration: 1,
                  onComplete: () => {
                    setTimeout(() => {
                      this.isFinishGame = true;
                    }, 1000);
                  },
                });
              },
            });
          },
        });
      },
    });
  }
}
