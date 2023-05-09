import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-animation-one',
  templateUrl: './animation-one.component.html',
  styleUrls: ['./animation-one.component.scss'],
})
export class AnimationOneComponent implements OnInit {
  timeline: any;

  constructor() {}

  ngOnInit(): void {
    this.initAnimation();
  }

  initAnimation() {
    let checklist: any = document.getElementById('checklist');
    let showText: any = document.querySelector('.show-text');
    checklist.addEventListener('change', function (event: any) {
      let text = event.currentTarget.value;
      text = text
        .split('')
        .map((t: any) =>
          t === ' '
            ? `<span class='letter'>&nbsp;</span>`
            : `<span class='letter'>${t}</span>`
        )
        .join('');
      showText.innerHTML = text;
      gsap.from('.letter', {
        y: 50,
        scale: 0,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'back',
      });
    });

    window.addEventListener('load', (event: any) => {
      this.init();
    });
  }

  init() {
    // let timeline = gsap.timeline({repeat: 1, yoyo: true});
    this.timeline = gsap.timeline({
      defaults: { opacity: 0, ease: 'back' },
    });
    this.timeline
      .from('main', { ease: 'linear', autoAlpha: 0 })
      .from('h1', { x: 80, duration: 1 })
      .from('h2', { x: -80, duration: 1 }, '<')
      .from('p', { y: 30 }, '-=0.2')
      .from('.input-wrapper', { y: 50 }, '-=0.4')
      .from(
        '#balloons > g',
        {
          scale: 0,
          transformOrigin: '50% 50%',
          stagger: 0.1,
        },
        '-=0.5'
      );
    // Document.querySelector('.reverse').onclick = () => timeline.reverse();
    // Document.querySelector('.restart').onclick = () => timeline.restart();
  }

  reverse() {
    this.timeline.reverse();
  }

  restart() {
    this.timeline.restart();
  }

}
