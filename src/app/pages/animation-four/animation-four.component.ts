import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
@Component({
  selector: 'app-animation-four',
  templateUrl: './animation-four.component.html',
  styleUrls: ['./animation-four.component.scss'],
})
export class AnimationFourComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    gsap.fromTo(
      '#cat',
      1,
      { opacity: 1, y: 60 },
      { opacity: 1, y: 0, delay: 2, ease: 'power4.easeOut' }
    );

    gsap.fromTo(
      '.shadow-2',
      2,
      { opacity: 0 },
      { opacity: 0.5, repeat: -1, yoyo: true, delay: 0.5 }
    );
    gsap.fromTo(
      '.shadow-1',
      2,
      { opacity: 0.25 },
      { opacity: 0.5, repeat: -1, yoyo: true }
    );

    this.treePar1Animation();
  }

  treePar1Animation() {
    // gsap.to('#tree-par-1', { rotation: 19, y: -30, delay: 2 });
    // // gsap.to('#tree-par-1', { y: 0, x: 0, rotation: 0, delay: 1.3 });
    // gsap.to('#tree-par-1', { y: 10, x: 10, rotation: -10, delay: 3 });
    // gsap.delayedCall(3, () => {
    //   this.treePar1Animation();
    // });

    gsap.fromTo(
      '#tree-par-1',
      { opacity: 1 },
      {
        opacity: 1,
        repeat: -1,
        yoyo: true,
        rotation: 5,
        y: -20,
        duration: 4,
      }
    );
    gsap.fromTo(
      '#tree-part-2',
      { opacity: 1 },
      {
        opacity: 1,
        yoyo: true,
        rotation: -5,
        repeat: -1,
        duration: 4,
      }
    );

    // gsap.fromTo(
    //   '#tree-par-1',
    //   { opacity: 1 },
    //   {
    //     opacity: 1,
    //     // repeat: -1,
    //     yoyo: true,
    //     y: 10,
    //     x: 10,
    //     rotation: -10,
    //     duration: 2,
    //     delay: 4,
    //   }
    // );
  }
}
