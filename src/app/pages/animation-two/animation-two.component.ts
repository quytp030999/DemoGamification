import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-animation-two',
  templateUrl: './animation-two.component.html',
  styleUrls: ['./animation-two.component.scss'],
})
export class AnimationTwoComponent implements OnInit {

  initA = -200;
  moveA = 0;
  initB = 0;
  moveB = 200;

  constructor() {}

  ngOnInit(): void {
    this.initAnimation();
  }

  initAnimation() {

    if (this.moveA === 0) {
      this.initA = 0;
      this.moveA = 200;
      this.initB = -200;
      this.moveB = 0;
    } else {
      this.initA = -200;
      this.moveA = 0;
      this.initB = 0;
      this.moveB = 200;
    }

    gsap.fromTo(
      '.img1',
      {
        y: this.initA,
      },
      {
        duration: 1,
        y: this.moveA,
        ease: 'expo.out',
      }
    );
    gsap.fromTo(
      '.img2',
      {
        y: this.initB,
      },
      {
        duration: 1,
        y: this.moveB,
        ease: 'expo.out',
      }
    );

    gsap.delayedCall(3, () => {
      this.initAnimation();
    });
  }

}
