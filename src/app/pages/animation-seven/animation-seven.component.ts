import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-animation-seven',
  templateUrl: './animation-seven.component.html',
  styleUrls: ['./animation-seven.component.scss'],
})
export class AnimationSevenComponent implements OnInit {
  leftPineAnimate: any;

  constructor() {}

  ngOnInit(): void {
    this.setScaleZero('#left-pine', 70, 120, -100);
    this.startTo('#center-branch', {
      rotate: 15,
      duration: 1.7,
      position: 0.4,
    });

    gsap.delayedCall(2, () => {
      this.leftPineAnimate = this.startTo('#left-pine', {
        scale: 1,
        rotate: 0,
        duration: 1.3,
        position: 0.4,
      });
    });

    gsap.delayedCall(3, () => {
      this.startTo('#left-pine', {
        rotate: 15,
        duration: 0.5,
      });
    });

    gsap.delayedCall(4, () => {
      this.leftPineAnimate.reverse();
    });
  }

  startTo(target: string, option: any) {
    return gsap.to(target, option);
  }

  setScaleZero(name: string, x: number, y: number, rotate: number) {
    gsap.set(`${name}`, {
      transformOrigin: `${x}% ${y}%`,
      scale: 0,
      rotate: rotate,
    });
  }
}
