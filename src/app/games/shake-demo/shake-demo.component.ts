import { ShakeServiceService } from './../../services/shake-service.service';
import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';

declare var Shake: any;

@Component({
  selector: 'app-shake-demo',
  templateUrl: './shake-demo.component.html',
  styleUrls: ['./shake-demo.component.scss'],
})
export class ShakeDemoComponent implements OnInit {
  private shakeEvent: any;

  countShake: number = 0;

  constructor(private shakeService: ShakeServiceService) {}

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
    // this.shakeService.watchShake().subscribe(() => {
    //   alert('Shake detected!');
    // });
  }

  ngOnDestroy() {
    this.shakeEvent.stop();
    window.removeEventListener('shake', this.handleShake);
  }

  handleShake() {
    // Call the shake method on the BoiComponent
    // You can use Angular's Dependency Injection to get a reference to the BoiComponent
    try {
      this.countShake++;
      if (this.countShake % 2 == 0) {
        gsap.to('.bottle', {
          duration: 0.1,
          repeat: 3,
          yoyo: true,
          ease: 'power2.inOut',
          rotation: -20,
          x: 0,
          y: 0,
        });
      } else {
        gsap.to('.bottle', {
          duration: 0.1,
          repeat: 3,
          yoyo: true,
          ease: 'power2.inOut',
          rotation: -20,
          x: 20,
          y: 20,
        });
      }
      if (this.countShake == 3) {
        this.initAnimationShakeBottle();
      }
    } catch (error) {
      alert(error);
    }
  }

  initAnimationShakeBottle() {
    // gsap.to('.bottle', {
    //   duration: 0.1,
    //   repeat: -1,
    //   yoyo: true,
    //   ease: 'power2.inOut',
    //   rotation: -20,
    //   x: 20,
    //   y: 20,
    // });
    // gsap.delayedCall(2, () => {
    //   gsap.killTweensOf('.bottle');
    // });
    // gsap.to('.water-drop', {
    //   duration: 1,
    //   delay: 2,
    //   opacity: 1,
    // });
    // gsap.to('.water-drop', {
    //   duration: 4,
    //   delay: 2.2,
    //   ease: 'power4.out',
    //   x: '+=110',
    //   y: '-=95',
    //   scale: 10,
    // });
    gsap.to('.popup-container', {
      delay: 2.1,
      opacity: 1,
      duration: 0.2,
    });
  }
}
