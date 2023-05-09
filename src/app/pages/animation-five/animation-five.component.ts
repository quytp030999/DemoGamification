import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-animation-five',
  templateUrl: './animation-five.component.html',
  styleUrls: ['./animation-five.component.scss'],
})
export class AnimationFiveComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.initAnimation();
    this.initSnow();
  }

  initAnimation() {
    this.startFromTo(
      '#Trunk',
      {
        opacity: 0,
        y: -300,
      },
      {
        y: 50,
        duration: 0.3,
        opacity: 1,
      }
    );
    this.startFromTo(
      '#Trunk',
      {
        y: 50,
      },
      {
        y: -50,
        duration: 0.3,
        delay: 0.3,
      }
    );
    this.startFromTo(
      '#Trunk',
      {
        y: -50,
      },
      {
        y: 0,
        duration: 0.3,
        delay: 0.6,
      }
    );
    this.startFromTo(
      '#TreePart_6',
      {
        y: -450,
      },
      {
        opacity: 1,
        duration: 0.2,
        y: 300,
        x: -3,
        ease: 'elastic.easeOut',
        delay: 0.9,
      }
    );
    this.startFrom('#ShadowTree', {
      opacity: 0,
      ease: 'elastic.easeOut',
      duration: 0.2,
      delay: 1,
    });
    this.startFromTo(
      '#TreePart_6',
      {
        x: -3,
      },
      {
        duration: 0.2,
        y: 310,
        x: -3,
        ease: 'elastic.easeOut',
        delay: 1.7,
      }
    );
    this.startFromTo(
      '#TreePart_6',
      {
        x: -3,
      },
      {
        opacity: 1,
        duration: 0.2,
        y: 240,
        x: -3,
        ease: 'power4.easeOut',
        delay: 2,
      }
    );
    this.startFromTo(
      '#TreePart_5',
      {
        opacity: 0,
        y: 300,
      },
      {
        opacity: 1,
        duration: 0.2,
        y: 240,
        x: -3,
        ease: 'power4.easeOut',
        delay: 2,
      }
    );
    this.shakeAnimation(
      '#TreePart_6',
      {
        x: '+=20',
        yoyo: true,
        repeat: 3,
        duration: 0.1,
        delay: 2.5,
      },
      {
        x: '-=10',
        yoyo: true,
        repeat: 3,
        duration: 0.1,
        delay: 2.5,
      }
    );
    this.shakeAnimation(
      '#TreePart_5',
      {
        x: '+=10',
        yoyo: true,
        repeat: 3,
        duration: 0.1,
        delay: 2.5,
      },
      {
        x: '-=20',
        yoyo: true,
        repeat: 3,
        duration: 0.1,
        delay: 2.5,
      }
    );
    this.startFromTo(
      '#TreePart_6',
      {
        x: -3,
      },
      {
        opacity: 1,
        duration: 0.2,
        y: 250,
        x: -3,
        ease: 'power4.easeOut',
        delay: 2.9,
      }
    );
    this.startFromTo(
      '#TreePart_5',
      {},
      {
        opacity: 1,
        duration: 0.2,
        y: 250,
        ease: 'power4.easeOut',
        delay: 2.9,
      }
    );
    this.startFromTo(
      '#TreePart_6',
      {
        x: -3,
      },
      {
        opacity: 1,
        duration: 0.2,
        y: 0,
        x: -3,
        ease: 'power4.easeOut',
        delay: 3.1,
      }
    );
    this.startFromTo(
      '#TreePart_5',
      {},
      {
        opacity: 1,
        duration: 0.2,
        y: 0,
        ease: 'power4.easeOut',
        delay: 3.1,
      }
    );
    this.startFromTo(
      '#TreePart_4',
      {
        opacity: 0,
        duration: 0.2,
        y: 240,
      },
      {
        opacity: 1,
        duration: 0.2,
        y: 0,
        ease: 'power4.easeOut',
        delay: 3.3,
      }
    );
    this.startFromTo(
      '#TreePart_3',
      {
        opacity: 0,
        duration: 0.2,
      },
      {
        opacity: 1,
        duration: 0.2,
        ease: 'power4.easeOut',
        delay: 3.4,
      }
    );
    this.startFromTo(
      '#TreePart_2',
      {
        opacity: 0,
        duration: 0.2,
      },
      {
        opacity: 1,
        duration: 0.2,
        ease: 'power4.easeOut',
        delay: 3.5,
      }
    );
    this.startFromTo(
      '#TreePart_1',
      {
        opacity: 0,
        duration: 0.2,
      },
      {
        opacity: 1,
        duration: 0.2,
        ease: 'power4.easeOut',
        delay: 3.6,
      }
    );
    // 3.8s

    this.startFrom('.ronLightA1', {
      opacity: 0,
      y: -300,
      duration: 0.2,
      delay: 3.9,
    });
    this.startFrom('.ronLightA2', {
      opacity: 0,
      y: -300,
      duration: 0.2,
      delay: 4,
    });
    this.startFrom('.ronLightA3', {
      opacity: 0,
      y: -300,
      duration: 0.2,
      delay: 4.1,
    });
    this.startFrom('.s15', {
      opacity: 0,
      delay: 4.5,
      duration: 0.4,
    });
    this.startFrom('#BaublesStriped', {
      opacity: 0,
      delay: 4.8,
      duration: 0.4,
    });
    this.startFrom('#BaublesFlat', {
      opacity: 0,
      delay: 4.8,
      duration: 0.4,
    });
    this.startFrom('#Star', {
      delay: 5.3,
      duration: 0.4,
      opacity: 0,
    });
    this.startFrom('#Christmas', {
      opacity: 0,
      duration: 1.5,
      delay: 6.2,
      y: -150,
    });
    this.startFrom('#Merry', {
      opacity: 0,
      duration: 0.5,
      delay: 6.2,
      y: -150,
    });
    this.startFrom('#RibbonBack', {
      opacity: 0,
      duration: 0.5,
      delay: 6.2,
      y: -150,
    });
    // 7s

    this.shakeAnimation(
      '#Tree',
      {
        x: '+=10',
        yoyo: true,
        repeat: 3,
        duration: 0.1,
        delay: 7,
      },
      {
        x: '-=20',
        yoyo: true,
        repeat: 3,
        duration: 0.1,
        delay: 7.5,
      }
    );

    this.startFrom('#PresentA', {
      opacity: 0,
      x: 220,
      y: -70,
      delay: 7.6,
      duration: 0.5,
      rotation: 200,
    });
    this.startFrom('#PresentB', {
      opacity: 0,
      x: 20,
      y: -180,
      delay: 7.7,
      duration: 0.5,
      rotation: 30,
    });
    this.startFrom('#PresentC', {
      opacity: 0,
      x: 100,
      y: -150,
      delay: 7.8,
      duration: 0.5,
      rotation: -200,
    });
    this.startFromTo(
      '#ShadowPresent_2_',
      { opacity: 0 },
      { opacity: 1, delay: 8.5 }
    );

    gsap.delayedCall(8.8, () => {
      this.initAnimationTree();
    });

    this.initAnimationLogo();
  }

  initAnimationLogo() {
    this.startFromTo(
      '.logo',
      {
        scale: 4,
        y: -100
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scale: 1,
        yoyo: true,
        delay: 8.8,
      }
    );

    this.startFromTo(
      '.logo',
      {
        scale: 1,
      },
      {
        duration: 0.3,
        scale: 3,
        yoyo: true,
        delay: 9.8,
      }
    );
    this.startFromTo(
      '.logo',
      {
        scale: 3,
      },
      {
        duration: 0.3,
        scale: 1,
        yoyo: true,
        delay: 10.1,
      }
    );

    this.startFromTo(
      '.logo',
      {
        scale: 1,
      },
      {
        duration: 0.3,
        scale: 2,
        yoyo: true,
        delay: 10.4,
      }
    );
    this.startFromTo(
      '.logo',
      {
        scale: 2,
      },
      {
        duration: 0.3,
        scale: 1,
        yoyo: true,
        delay: 10.7,
      }
    );

    this.startFromTo(
      '.logo',
      {
        scale: 1,
      },
      {
        duration: 0.3,
        scale: 1.4,
        yoyo: true,
        delay: 11,
      }
    );
    this.startFromTo(
      '.logo',
      {
        scale: 1.4,
      },
      {
        duration: 0.3,
        scale: 1,
        yoyo: true,
        delay: 11.3,
      }
    );

    this.startFromTo(
      '.logo',
      {
        scale: 1,
      },
      {
        duration: 0.2,
        scale: 1.2,
        yoyo: true,
        delay: 11.6,
      }
    );
    this.startFromTo(
      '.logo',
      {
        scale: 1.2,
      },
      {
        duration: 0.2,
        scale: 1,
        yoyo: true,
        delay: 11.8,
      }
    );
  }

  initAnimationTree() {
    this.startFromTo(
      '#TreePart_1',
      { opacity: 1 },
      {
        opacity: 1,
        repeat: -1,
        yoyo: true,
        rotation: 2,
        y: -10,
        duration: 2,
      }
    );
    this.startFromTo(
      '#TreePart_2',
      { opacity: 1 },
      {
        opacity: 1,
        yoyo: true,
        rotation: -2,
        repeat: -1,
        duration: 2,
      }
    );
    this.startFromTo(
      '#TreePart_4',
      { opacity: 1 },
      {
        opacity: 1,
        repeat: -1,
        yoyo: true,
        rotation: 2,
        y: -10,
        duration: 2,
      }
    );
    this.startFromTo(
      '#TreePart_3',
      { opacity: 1 },
      {
        opacity: 1,
        yoyo: true,
        rotation: -2,
        repeat: -1,
        duration: 2,
      }
    );
    this.startFromTo(
      '#TreePart_5',
      { opacity: 1 },
      {
        opacity: 1,
        repeat: -1,
        yoyo: true,
        rotation: 2,
        y: -10,
        duration: 2,
      }
    );
    this.startFromTo(
      '#TreePart_6',
      { opacity: 1 },
      {
        opacity: 1,
        yoyo: true,
        rotation: -2,
        repeat: -1,
        duration: 2,
      }
    );
    this.startFromTo(
      '#BaublesStriped',
      { opacity: 1 },
      {
        opacity: 1,
        yoyo: true,
        rotation: -2,
        repeat: -1,
        duration: 2,
      }
    );
    this.startFromTo(
      '#BaublesFlat',
      { opacity: 1 },
      {
        opacity: 1,
        repeat: -1,
        yoyo: true,
        rotation: 2,
        y: -10,
        duration: 2,
        fill: '#f1f51b',
        overwrite: true,
      }
    );
    this.startFromTo(
      '.s15',
      { opacity: 1 },
      {
        repeat: -1,
        yoyo: true,
        duration: 2,
        fill: '#f1f51b',
        overwrite: true,
      }
    );
    this.startFromTo(
      '#Star',
      { opacity: 1 },
      {
        repeat: -1,
        yoyo: true,
        duration: 2,
        fill: '#f1f51b',
        overwrite: true,
      }
    );
    this.startFromTo(
      '#Christmas',
      {},
      {
        y: -10,
        repeat: -1,
        yoyo: true,
        duration: 1,
        delay: 2,
      }
    );
    this.startFromTo(
      '#RibbonBack',
      {},
      {
        y: -10,
        repeat: -1,
        yoyo: true,
        duration: 1,
        delay: 2,
      }
    );
    this.startFromTo(
      '#Merry',
      {},
      {
        y: -10,
        repeat: -1,
        yoyo: true,
        duration: 1,
        delay: 2,
      }
    );
  }

  clickOpenGift(target: string) {
    this.elasticBlind(`.box${target}`);
    this.openGift(
      `.boxTop${target}`,
      -10,
      -10,
      'power4.easeOut',
      0.5,
      -20,
      0.5
    );
    this.openGift(
      `.ribbonSide${target}`,
      10,
      40,
      'power4.easeOut',
      0.5,
      10,
      0.5
    );
    this.openGift(
      `.PresentBoxRibbon${target}`,
      -15,
      -15,
      'power4.easeOut',
      0.5,
      -20,
      0.5
    );
    this.openGift(`.box${target}`, 30, -20, 'power4.easeOut', 0.5, 20, 0.5);
    this.openGift(
      `.boxTopShadow${target}`,
      30,
      -20,
      'power4.easeOut',
      0.5,
      20,
      0.5
    );
    this.startTo(`.box${target}`, { x: 0, y: 0, delay: 1 });
  }

  openGift(
    target: string,
    x: number,
    y: number,
    ease: string,
    duration: number,
    rotation: number,
    delay: number
  ) {
    this.startTo(target, {
      x: y,
      y: x,
      duration: duration,
      ease: ease,
      rotation: rotation,
      yoyo: true,
      repeat: 1,
      delay: delay,
    });
  }

  elasticBlind(target: string) {
    gsap.to(target, {
      x: '+=30',
      yoyo: true,
      repeat: 2,
      duration: 0.1,
    });
    gsap.to(target, {
      x: '-=20',
      yoyo: true,
      repeat: 2,
      duration: 0.1,
    });
  }

  startFromTo(target: string, from: any, to: any) {
    gsap.fromTo(target, from, to);
  }

  startFrom(target: string, from: any) {
    gsap.from(target, from);
  }

  startTo(target: string, to: any) {
    gsap.to(target, to);
  }

  shakeAnimation(target: string, to1: any, to2: any) {
    gsap.to(target, to1);
    gsap.to(target, to2);
  }

  initSnow() {
    gsap.set('#container', { perspective: 600 });

    var total = 300;
    var container = document.getElementById('container');
    var w = window.innerWidth;
    var h = window.innerHeight;

    for (var i = 0; i < total; i++) {
      var Div = document.createElement('div');
      Div.className = 'dot';
      Div.style.cssText =
        'width: 10px;height: 10px;background: url("../../../assets/imgs/snow.png");background-size: 100% 100%;';
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
    this.startTo(elm, {
      y: h + 100,
      ease: 'linear.easeNone',
      repeat: -1,
      delay: -15,
      duration: this.R(6, 15),
    });
    this.startTo(elm, {
      x: '+=100',
      rotationZ: this.R(0, 180),
      repeat: -1,
      yoyo: true,
      duration: this.R(4, 8),
      ease: 'sine.easeInOut',
    });
    this.startTo(elm, {
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
