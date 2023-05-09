import { Component, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-classify',
  templateUrl: './classify.component.html',
  styleUrls: ['./classify.component.scss'],
})
export class ClassifyComponent implements AfterViewInit {
  items: Array<any> = [
    {
      idx: 0,
      url: '../../../assets/imgs/choose/banana.png',
      position: 1,
      id: 'banana',
      display: 'block',
    },
    {
      idx: 1,
      url: '../../../assets/imgs/choose/orange.png',
      position: 1,
      id: 'orange',
      display: 'block',
    },
    {
      idx: 2,
      url: '../../../assets/imgs/choose/guaba.png',
      position: 1,
      id: 'guaba',
      display: 'block',
    },
    {
      idx: 3,
      url: '../../../assets/imgs/classify/water-gun.png',
      position: 2,
      id: 'gun',
      display: 'block',
    },
    {
      idx: 4,
      url: '../../../assets/imgs/classify/washing-machine.png',
      position: 2,
      id: 'machine',
      display: 'block',
    },
    {
      idx: 5,
      url: '../../../assets/imgs/classify/bear.png',
      position: 2,
      id: 'bear',
      display: 'block',
    },
  ];

  listFruit: Array<any> = [
    {
      idx: 0,
      url: '../../../assets/imgs/choose/banana.png',
      id: 'banana',
      display: 'none',
    },
    {
      idx: 1,
      url: '../../../assets/imgs/choose/orange.png',
      id: 'orange',
      display: 'none',
    },
    {
      idx: 2,
      url: '../../../assets/imgs/choose/guaba.png',
      id: 'guaba',
      display: 'none',
    },
  ];
  listToys: Array<any> = [
    {
      idx: 0,
      url: '../../../assets/imgs/classify/water-gun.png',
      id: 'gun',
      display: 'none',
    },
    {
      idx: 1,
      url: '../../../assets/imgs/classify/washing-machine.png',
      id: 'machine',
      display: 'none',
    },
    {
      idx: 2,
      url: '../../../assets/imgs/classify/bear.png',
      id: 'bear',
      display: 'none',
    },
  ];

  box1Position = {
    xF: 0,
    xT: 0,
    yF: 0,
    yT: 0,
  };
  box2Position = {
    xF: 0,
    xT: 0,
    yF: 0,
    yT: 0,
  };

  ngAfterViewInit() {
    this.initPosition();
  }

  initPosition() {
    const wrapper: any = document.getElementById('wrapper');
    const main: any = document.getElementById('main');
    const wrapBox: any = document.getElementById('wrap-box');
    const box1: any = document.getElementById('box1');
    const box2: any = document.getElementById('box2');

    const widthWrapBox = wrapBox.offsetWidth;
    const heightWrapBox = wrapBox.offsetHeight;
    const widthBox1 = box1.offsetWidth;
    const heightBox1 = box1.offsetHeight;
    const widthBox2 = box2.offsetWidth;
    const heightBox2 = box2.offsetHeight;

    console.log(
      `widthWrapBox: ${widthWrapBox} -- heightWrapBox: ${heightWrapBox}`
    );
    console.log(`widthBox1: ${widthBox1} -- heightBox1: ${heightBox1}`);
    console.log(`widthBox2: ${widthBox2} -- heightBox2: ${heightBox2}`);

    const wrapperRect = wrapper.getBoundingClientRect();
    const mainRect = main.getBoundingClientRect();
    const parentRect = wrapBox.getBoundingClientRect();
    const box1Rect = box1.getBoundingClientRect();
    const box2Rect = box2.getBoundingClientRect();

    if (wrapperRect.width >= 500) {
      this.box1Position = {
        xF: box1Rect.left - parentRect.left + mainRect.x,
        xT: box1Rect.left - parentRect.left + widthBox1 + mainRect.x,
        yF: box1Rect.top - parentRect.top + mainRect.y,
        yT: box1Rect.top - parentRect.top + heightBox1 + mainRect.y,
      };
      this.box2Position = {
        xF: box2Rect.left - parentRect.left + mainRect.x,
        xT: box2Rect.left - parentRect.left + widthBox2 + mainRect.x,
        yF: box2Rect.top - parentRect.top + mainRect.y,
        yT: box2Rect.top - parentRect.top + heightBox2 + mainRect.y,
      };
    } else {
      this.box1Position = {
        xF: box1Rect.left - parentRect.left,
        xT: box1Rect.left - parentRect.left + widthBox1,
        yF: box1Rect.top - parentRect.top,
        yT: box1Rect.top - parentRect.top + heightBox1,
      };
      this.box2Position = {
        xF: box2Rect.left - parentRect.left,
        xT: box2Rect.left - parentRect.left + widthBox2,
        yF: box2Rect.top - parentRect.top,
        yT: box2Rect.top - parentRect.top + heightBox2,
      };
    }
    console.log('box1Position:::', this.box1Position);
    console.log('box2Position:::', this.box2Position);
  }

  onDragReleased(event: any, position: number, idx: number, id: string) {
    const CENTER_GIFT = 25;
    const element = event.source.element.nativeElement;
    const boundingClientRect = element.getBoundingClientRect();
    const x = boundingClientRect.left + CENTER_GIFT;
    const y = boundingClientRect.top + CENTER_GIFT;
    console.log(
      `Thả tại vị trí (xsss=${boundingClientRect.left}, ysss=${boundingClientRect.top})`
    );
    console.log(`Thả tại vị trí (x=${x}, y=${y})`);
    console.log(`position::: ${position}`);

    switch (position) {
      case 1: //
        this.detectPositionFruits(x, y, idx, id);
        break;
      case 2: // Toys
        this.detectPositionToys(x, y, idx, id);
        break;
      default:
        break;
    }
  }

  detectPositionToys(x: number, y: number, idx: number, id: string) {
    if (
      x > this.box2Position.xF &&
      x < this.box2Position.xT &&
      y > this.box2Position.yF &&
      y < this.box2Position.yT
    ) {
      this.chooseTrueToys(idx, id);
    } else {
      console.log('NO');
    }
  }

  detectPositionFruits(x: number, y: number, idx: number, id: string) {
    if (
      x > this.box1Position.xF &&
      x < this.box1Position.xT &&
      y > this.box1Position.yF &&
      y < this.box1Position.yT
    ) {
      this.chooseTrueFruits(idx, id);
    } else {
      console.log('NO');
    }
  }

  chooseTrueFruits(idx: number, id: string) {
    this.items[idx].display = 'none';
    const indexFruit = this.listFruit.findIndex((el: any) => {
      return el.id == id;
    });
    this.listFruit[indexFruit].display = 'block';
  }

  chooseTrueToys(idx: number, id: string) {
    this.items[idx].display = 'none';
    const indexToy = this.listToys.findIndex((el: any) => {
      return el.id == id;
    });
    this.listToys[indexToy].display = 'block';
  }
}
