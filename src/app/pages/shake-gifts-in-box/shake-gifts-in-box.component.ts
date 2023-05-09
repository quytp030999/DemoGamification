import { Component, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';
declare var Shake: any;

@Component({
  selector: 'app-shake-gifts-in-box',
  templateUrl: './shake-gifts-in-box.component.html',
  styleUrls: ['./shake-gifts-in-box.component.scss'],
})
export class ShakeGiftsInBoxComponent implements AfterViewInit {
  private shakeEvent: any;

  countShake: number = 0;

  constructor() {}

  ngAfterViewInit(): void {
    this.onShake();
  }

  ngOnInit() {
    try {
      this.shakeEvent = new Shake({
        threshold: 15,
        timeout: 1000,
      });
      this.shakeEvent.start();
      window.addEventListener('shake', this.handleShake.bind(this), false);
      gsap.from('.bottle', {
        duration: 2,
        rotation: 360,
        x: 500,
        ease: 'power2.easeInOut',
      });
    } catch (error) {
      alert(error);
    }
  }

  ngOnDestroy() {
    this.shakeEvent.stop();
    window.removeEventListener('shake', this.handleShake);
  }

  handleShake() {
    this.onShake();
  }

  onShake() {
    gsap.to('.gift', {
      y: -150,
      duration: 0.1,
    });
    // Tạo hiệu ứng lắc đều các món quà trong hộp
    gsap.to('.gift', {
      x: 'random(-140, 140, 5)', //chooses a random number between -20 and 20 for each target, rounding to the closest 5!
      y: 'random(0, -300, 5)',
      duration: 0.2,
      ease: 'none',
      repeat: -1,
      repeatRefresh: true, // gets a new random x and y value on each repeat
      delay: 0.1,
    });
    gsap.delayedCall(5, () => {
      gsap.to('.gift-pick', {
        x: 0,
        y: -150,
        scale: 5,
        duration: 3,
        opacity: 1,
        zIndex: 1,
        ease: 'power2.inOut',
        onComplete: () => {
          gsap.killTweensOf('.gift');
        },
      });
    });
  }
}
