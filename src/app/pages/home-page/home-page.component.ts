import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { gsap } from 'gsap';

// ScrollTrigger, Draggable, MotionPathPlugin
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { Draggable } from 'gsap/Draggable';
// import { Flip } from 'gsap/Flip';
// import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

// gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin);

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  backgroundImg: string = '/assets/imgs/1.jpeg';
  logo: string = '/assets/imgs/2.png';
  purple: string = '/assets/imgs/4.png';
  white: string = '/assets/imgs/3.png';
  percent: string = '/assets/imgs/12.png';
  receiveHouse: string = '/assets/imgs/11.png';
  location: string = '/assets/imgs/13.png';
  textAn: string = '/assets/imgs/10.png';
  textDuong: string = '/assets/imgs/9.png';
  textVuong: string = '/assets/imgs/8.png';
  textNguyen: string = '/assets/imgs/7.png';
  textVan: string = '/assets/imgs/6.png';
  textCu: string = '/assets/imgs/5.png';

  logoAnimate: any;
  purpleAnimate: any;
  whiteAnimate: any;
  percentAnimate: any;
  receiveHouseAnimate: any;
  locationAnimate: any;
  textAnAnimate: any;
  textDuongAnimate: any;
  textVuongAnimate: any;
  textNguyenAnimate: any;
  textVanAnimate: any;
  textCuAnimate: any;

  countRecall: number = 0;

  x: number = 0;
  y: number = 0;

  points: Array<any> = [
    {
      xF: 231,
      xT: 251,
      yF: 14,
      yT: 34,
      stt: false,
      idx: 0,
    },
    {
      xF: 58,
      xT: 78,
      yF: 232,
      yT: 252,
      stt: false,
      idx: 1,
    },
  ];

  displayPoint1: string = 'none';
  displayPoint2: string = 'none';

  countClick: number = 0;
  countClickFalse: number = 0;
  countTrue: number = 0;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    // this.initAnimation();
  }

  ngAfterViewInit() {
    const div = this.el.nativeElement.querySelector('#main');
    this.x = div.offsetLeft;
    this.y = div.offsetTop;
    console.log(this.x, this.y);
  }

  initAnimation() {
    this.logoAnimate = this.startFrom(1, -50, 0, 0, '.logo', 0, -1);
    this.purpleAnimate = gsap.fromTo(
      '.purple',
      this.generateFromTo(0, 0, 0, 0, '', 0, 0, 0, 0), // alpha: 0, x: 0
      this.generateFromTo(0, 0, 1, 0.2, 'power4.easeOut', 0, 0, 0, 0) // { x: 0, y: 0, alpha: 1, delay: 0.2, ease: 'power4.easeOut' }
    );
    this.whiteAnimate = gsap.fromTo(
      '.white',
      this.generateFromTo(0, 0, 0, 0, '', 0, 0, 0, 0), // alpha: 0, x: 0
      this.generateFromTo(0, 0, 1, 0.4, 'power4.easeOut', 0, 0, 0, 0) // { x: 0, y: 0, alpha: 1, delay: 0.2, ease: 'power4.easeOut' }
    );
    this.percentAnimate = gsap.fromTo(
      '.percent',
      this.generateFromTo(0, 0, 0, 0, '', 0, 0, 2, 2), // alpha: 0, x: 0
      this.generateFromTo(0, 0, 1, 0.6, 'bounce.easeOut', 0, 0, 1, 1) // { x: 0, y: 0, alpha: 1, delay: 0.2, ease: 'power4.easeOut' }
    );
    this.receiveHouseAnimate = gsap.fromTo(
      '.receiveHouse',
      this.generateFromTo(100, 0, 0, 0, '', 0, 0, 0, 0),
      this.generateFromTo(0, 0, 1, 0.7, 'power4.easeOut', 0, 0, 0, 0)
    );

    this.elasticBlind('.percent', 1.5);
    this.zoomingEffect('.receiveHouse', 1.1, 2);

    this.elasticBlind('.percent', 3.1);
    this.zoomingEffect('.receiveHouse', 1.1, 3.7);

    this.elasticBlind('.percent', 4.2);
    this.zoomingEffect('.receiveHouse', 1.1, 4.7);

    this.startTo(0, 0, 50, '.percent', 0, 0, 5.4, '', 0, 0);
    this.startTo(0, 0, 50, '.receiveHouse', 0, 0, 5.4, '', 0, 0);

    this.locationAnimate = gsap.fromTo(
      '.location',
      this.generateFromTo(0, 0, 0, 0, '', 0, 0, 0, 0),
      this.generateFromTo(0, 0, 1, 5.5, 'power4.easeOut', 0, 0, 1, 1)
    );

    this.textAnAnimate = gsap.fromTo(
      '.textAn',
      this.generateFromTo(300, 0, 0, 0, '', 0, 0, 0, 0),
      this.generateFromTo(0, 0, 1, 5.7, 'bounce.easeOut', 0, 0, 0, 0)
    );
    this.textDuongAnimate = gsap.fromTo(
      '.textDuong',
      this.generateFromTo(300, 0, 0, 0, '', 0, 0, 0, 0),
      this.generateFromTo(0, 0, 1, 6, 'power4.easeOut', 0, 0, 0, 0)
    );
    this.textVuongAnimate = gsap.fromTo(
      '.textVuong',
      this.generateFromTo(300, 0, 0, 0, '', 0, 0, 0, 0),
      this.generateFromTo(0, 0, 1, 6.3, 'power4.easeOut', 0, 0, 0, 0)
    );
    this.textNguyenAnimate = gsap.fromTo(
      '.textNguyen',
      this.generateFromTo(300, 0, 0, 0, '', 0, 0, 0, 0),
      this.generateFromTo(0, 0, 1, 6.6, 'power4.easeOut', 0, 0, 0, 0)
    );
    this.textVanAnimate = gsap.fromTo(
      '.textVan',
      this.generateFromTo(300, 0, 0, 0, '', 0, 0, 0, 0),
      this.generateFromTo(0, 0, 1, 6.9, 'power4.easeOut', 0, 0, 0, 0)
    );
    this.textCuAnimate = gsap.fromTo(
      '.textCu',
      this.generateFromTo(300, 0, 0, 0, '', 0, 0, 0, 0),
      this.generateFromTo(0, 0, 1, 7.2, 'power4.easeOut', 0, 0, 0, 0)
    );

    this.startTo(0.1, 0, 0, '.textAn', 0, 0, 7.3, '', 1.5, 1.5);
    this.startTo(0.1, 0, 0, '.textAn', 0, 1, 7.4, '', 1, 1);
    this.startTo(0.1, 0, 0, '.textDuong', 0, 0, 7.4, '', 1.5, 1.5);
    this.startTo(0.1, 0, 0, '.textDuong', 0, 1, 7.5, '', 1, 1);
    this.startTo(0.1, 0, 0, '.textVuong', 0, 0, 7.5, '', 1.5, 1.5);
    this.startTo(0.1, 0, 0, '.textVuong', 0, 1, 7.6, '', 1, 1);

    this.startTo(0.1, 0, 0, '.textNguyen', 0, 0, 7.6, '', 1.5, 1.5);
    this.startTo(0.1, 0, 0, '.textNguyen', 0, 1, 7.7, '', 1, 1);
    this.startTo(0.1, 0, 0, '.textVan', 0, 0, 7.7, '', 1.5, 1.5);
    this.startTo(0.1, 0, 0, '.textVan', 0, 1, 7.8, '', 1, 1);
    this.startTo(0.1, 0, 0, '.textCu', 0, 0, 7.8, '', 1.5, 1.5);
    this.startTo(0.1, 0, 0, '.textCu', 0, 1, 7.9, '', 1, 1);

    this.startTo(0.1, 0, 0, '.textAn', 0, 0, 7.9, '', 1.5, 1.5);
    this.startTo(0.1, 0, 0, '.textAn', 0, 1, 8, '', 1, 1);
    this.startTo(0.1, 0, 0, '.textDuong', 0, 0, 8, '', 1.5, 1.5);
    this.startTo(0.1, 0, 0, '.textDuong', 0, 1, 8.1, '', 1, 1);
    this.startTo(0.1, 0, 0, '.textVuong', 0, 0, 8.1, '', 1.5, 1.5);
    this.startTo(0.1, 0, 0, '.textVuong', 0, 1, 8.2, '', 1, 1);

    this.startTo(0.1, 0, 0, '.textNguyen', 0, 0, 8.2, '', 1.5, 1.5);
    this.startTo(0.1, 0, 0, '.textNguyen', 0, 1, 8.3, '', 1, 1);
    this.startTo(0.1, 0, 0, '.textVan', 0, 0, 8.3, '', 1.5, 1.5);
    this.startTo(0.1, 0, 0, '.textVan', 0, 1, 8.4, '', 1, 1);
    this.startTo(0.1, 0, 0, '.textCu', 0, 0, 8.4, '', 1.5, 1.5);
    this.startTo(0.1, 0, 0, '.textCu', 0, 1, 8.5, '', 1, 1);

    this.zoomingEffect('.textAn', 1.1, 9);
    this.zoomingEffect('.textDuong', 1.1, 9);
    this.zoomingEffect('.textDuong', 1.1, 9);
    this.zoomingEffect('.textNguyen', 1.1, 9.3);
    this.zoomingEffect('.textVan', 1.1, 9.3);
    this.zoomingEffect('.textCu', 1.1, 9.3);

    gsap.delayedCall(12, () => {
      this.countRecall++;
      if (this.countRecall <= 3) {
        this.initAnimation();
      }
    });
  }

  startFromTo(target: string, _from: any, _to: any) {
    return gsap.fromTo(target, _from, _to);
  }

  generateFromTo(
    x: number,
    y: number,
    alpha: number,
    delay: number,
    ease: string,
    duration: number,
    rotate: number,
    scaleX: number,
    scaleY: number
  ) {
    var options: any = {
      x: x,
      y: y,
      alpha: alpha,
      delay: delay,
      ease: ease,
      duration: duration,
      rotate: rotate,
    };

    if (!delay) {
      delete options.delay;
    }

    if (!ease) {
      delete options.ease;
    }

    if (!rotate) {
      delete options.rotate;
    }

    if (!duration) {
      delete options.duration;
    }

    if (!scaleX) {
      delete options.scaleX;
    }

    if (!scaleY) {
      delete options.scaleY;
    }

    return options;
  }

  startFrom(
    duration: number,
    y: number,
    x: number,
    opacity: number,
    target: string,
    rotate: number,
    zIndex: number
  ) {
    let options: any = {
      duration: duration,
      y: y,
      x: x,
      opacity: opacity,
    };
    if (rotate) {
      options['rotation'] = rotate;
    }
    if (zIndex) {
      options['zIndex'] = zIndex;
    }
    return gsap.from(target, options);
  }

  /*
    @param
      duration: number,
      y: number,
      x: number,
      target: string,
      rotate: number,
      alpha: number,
      delay: number,
      ease: string,
      scaleX: number,
      scaleY: number
  */
  startTo(
    duration: number,
    y: number,
    x: number,
    target: string,
    rotate: number,
    alpha: number,
    delay: number,
    ease: string,
    scaleX: number,
    scaleY: number
  ) {
    return gsap.to(
      target,
      this.generateFromTo(
        x,
        y,
        alpha,
        delay,
        ease,
        duration,
        rotate,
        scaleX,
        scaleY
      )
    );
  }

  elasticBlind(target: string, time: number) {
    gsap.to(target, 0.1, {
      alpha: 0,
      delay: time + 0.1,
      ease: 'elastic.easeOut',
    });
    gsap.to(target, 0.1, {
      alpha: 1,
      delay: time + 0.2,
      ease: 'elastic.easeOut',
    });
    gsap.to(target, 0.1, {
      alpha: 0,
      delay: time + 0.3,
      ease: 'elastic.easeOut',
    });
    gsap.to(target, 0.1, {
      alpha: 1,
      delay: time + 0.4,
      ease: 'elastic.easeOut',
    });
  }

  zoomingEffect(target: string, ratio: number, time: number) {
    gsap.to(target, 0.1, { scaleX: ratio, scaleY: ratio, delay: time });
    gsap.to(target, 0.1, { scaleX: 1, scaleY: 1, delay: time + 0.1 });
    gsap.to(target, 0.1, {
      scaleX: ratio,
      scaleY: ratio,
      delay: time + 0.2,
    });
    gsap.to(target, 0.1, { scaleX: 1, scaleY: 1, delay: time + 0.3 });
  }

  positionMain(event: any) {
    if (this.countTrue != 2) {
      this.countClick += 1;
      var x = event.clientX - this.x;
      var y = event.clientY - this.y;
      console.log('Position event: (x: ' + event.clientX + ', y: ' + event.clientY + ')');
      console.log('Position: (x: ' + x + ', y: ' + y + ')');

      var flagFalse = false;

      // for (let point of this.points) {
      //   if (x >= point.xF && x <= point.xT && y >= point.yF && y <= point.yT) {
      //     if (point.stt == false) {
      //       this.points[point.idx].stt = true;
      //       switch (point.idx + 1) {
      //         case 1:
      //           this.displayPoint1 = 'block';
      //           break;
      //         default:
      //           this.displayPoint2 = 'block';
      //           break;
      //       }
      //       alert('DUNG ROI');
      //       this.countTrue += 1;
      //       if (this.countTrue === 2) {
      //         alert('Completed');
      //         console.log(
      //           `countClick::: ${this.countClick} --- countClickFalse::: ${this.countClickFalse}`
      //         );
      //       }
      //     }
      //     flagFalse = true;
      //     break;
      //   }
      // }

      // if (flagFalse == false) {
      //   this.countClickFalse += 1;
      //   alert('SAI ROI');
      // }
    } else {
      alert('Completed');
      console.log(
        `countClick::: ${this.countClick} --- countClickFalse::: ${this.countClickFalse}`
      );
    }
  }
}
