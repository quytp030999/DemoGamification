import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(MotionPathPlugin);

@Component({
  selector: 'app-animation-six',
  templateUrl: './animation-six.component.html',
  styleUrls: ['./animation-six.component.scss'],
})
export class AnimationSixComponent implements OnInit {
  falling: boolean = true;

  constructor() {}

  ngOnInit(): void {
    this.init();
  }

  init() {
    gsap.set('#container', { perspective: 600 });

    var total = 100;
    var container = document.getElementById('container');
    var w = window.innerWidth;
    var h = window.innerHeight;

    for (var i = 0; i < total; i++) {
      var Div = document.createElement('div');
      Div.className = 'dot';
      Div.style.cssText =
        'width: 35px;height: 35px;background: url("../../../assets/imgs/snow.png");background-size: 100% 100%;';
      gsap.set(Div, {
        attr: { class: 'dot' },
        x: this.R(0, w),
        y: this.R(-200, -150),
        z: this.R(-200, 200),
      });
      container!.appendChild(Div);
      this.animm(Div, h);
    }
  }

  animm(elm: any, h: any) {
    gsap.to(elm, {
      y: h + 100,
      ease: 'linear.easeNone',
      repeat: -1,
      delay: -15,
      duration: this.R(6, 15),
    });
    gsap.to(elm, {
      x: '+=100',
      rotationZ: this.R(0, 180),
      repeat: -1,
      yoyo: true,
      duration: this.R(4, 8),
      ease: 'sine.easeInOut',
    });
    gsap.to(elm, {
      rotationX: this.R(0, 360),
      rotationY: this.R(0, 360),
      repeat: -1,
      yoyo: true,
      ease: 'sine.easeInOut',
      delay: -5,
      duration: this.R(2, 8),
    });
  }

  R(min: number, max: number) {
    return min + Math.random() * (max - min);
  }
}
