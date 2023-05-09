import { Component } from '@angular/core';
import html2canvas from 'html2canvas';
import { Subject, Observable } from 'rxjs';
import { WebcamInitError } from 'ngx-webcam';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss'],
})
export class CameraComponent {
  listItem: Array<any> = [
    {
      idx: 0,
      url: '../../../assets/imgs/camera/AHA-30-BHA-2-Peeling-Solution-removebg-preview.png',
      width: 100,
      height: 100,
    },
    {
      idx: 1,
      url: '../../../assets/imgs/camera/logo-style4-removebg-preview.png',
      width: 100,
      height: 100,
    },
    {
      idx: 2,
      url: '../../../assets/imgs/camera/nuoc-hoa-hong-ordinary-glycolic-acid-7-toning-solution-removebg-preview.png',
      width: 100,
      height: 100,
    },
    {
      idx: 3,
      url: '../../../assets/imgs/camera/The-No-Brainer-Set.jpg',
      width: 100,
      height: 100,
    },
    {
      idx: 4,
      url: '../../../assets/imgs/camera/logo-ordinary.png',
      width: 100,
      height: 100,
    },
    {
      idx: 5,
      url: '../../../assets/imgs/camera/original-removebg-preview.png',
      width: 100,
      height: 100,
    },
  ];
  listItemCamera: Array<any> = [];

  captureImage: any = '';

  isDisplayTrash: string = 'none';

  isStartVideo: boolean = false;

  xTrashFrom: number = 0;
  xTrashTo: number = 0;
  yTrashFrom: number = 0;
  yTrashTo: number = 0;

  public multipleWebcamsAvailable = false;
  // width: number = 360;
  height: number = 0;
  public videoOptions: MediaTrackConstraints = {};
  private trigger: Subject<void> = new Subject<void>();
  public errors: WebcamInitError[] = [];

  constructor() {}

  async ngAfterViewInit() {
    const camera: any = document.getElementById('camera');
    const widthCamera = camera.offsetWidth;
    const heightCamera = camera.offsetHeight;
    this.xTrashFrom = widthCamera / 2 - 25;
    this.xTrashTo = widthCamera / 2 + 25;
    this.yTrashFrom = heightCamera - 60;
    this.yTrashTo = heightCamera - 10;
    this.height = heightCamera;
    this.startVideo();
    // this.widthCamera = widthCamera;
    // this.heightCamera = heightCamera;
    // this.width = widthCamera;
    // console.log('widthCamera:::', this.widthCamera);
    // console.log('heightCamera:::', this.heightCamera);
    // alert(
    //   `heightCamera::: ${heightCamera} - widthCamera::: ${widthCamera}`
    // );
  }

  public handleInitError(error: WebcamInitError): void {
    this.errors.push(error);
  }
  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  chooseItem(item: {
    idx: number;
    url: string;
    width: number;
    height: number;
  }) {
    if (this.isStartVideo) {
      this.listItemCamera.push(item);
      this.listItem.splice(item.idx, 1);
      this.setIndexItems();
    }
  }

  onTouchStart(event: TouchEvent, image: any) {
    if (event.touches.length == 2) {
      image.touchDistance = this.getTouchDistance(event.touches);
      image.initialWidth = image.width;
      image.initialHeight = image.height;
    }
  }

  onTouchMove(event: TouchEvent, image: any) {
    this.isDisplayTrash = 'block';
    if (event.touches.length == 2) {
      const touchDistance = this.getTouchDistance(event.touches);
      const scale = touchDistance / image.touchDistance;
      image.width = image.initialWidth * scale;
      image.height = image.initialHeight * scale;
    }
  }

  onTouchEnd(event: TouchEvent, image: any, idx: number) {
    delete image.touchDistance;
    delete image.initialWidth;
    delete image.initialHeight;
    if (
      event.changedTouches[0].clientX > this.xTrashFrom &&
      event.changedTouches[0].clientX < this.xTrashTo &&
      event.changedTouches[0].clientY > this.yTrashFrom &&
      event.changedTouches[0].clientY < this.yTrashTo
    ) {
      this.listItemCamera.splice(idx, 1);
      this.listItem.push(image);
      this.setIndexItems();
    }
    this.isDisplayTrash = 'none';
  }

  private getTouchDistance(touches: TouchList) {
    const touch1 = touches[0];
    const touch2 = touches[1];
    return Math.sqrt(
      Math.pow(touch2.clientX - touch1.clientX, 2) +
        Math.pow(touch2.clientY - touch1.clientY, 2)
    );
  }

  setIndexItems() {
    // Đánh index từng phần tử trong mảng đã sắp xếp
    this.listItem.forEach((value, index) => {
      value.idx = index;
    });
    this.listItemCamera.forEach((value2, index2) => {
      value2.idx = index2;
    });
  }

  startVideo() {
    this.isStartVideo = true;
  }

  captureImg() {
    if (this.isStartVideo) {
      // Get the div element you want to capture
      const divToCapture: any = document.getElementById('camera');

      html2canvas(divToCapture).then((canvas) => {
        const image = canvas.toDataURL();
        this.isStartVideo = false;
        this.captureImage = image;
        this.listItemCamera = [];
      });
    }
  }

  onBackReviewImgCapture() {
    this.captureImage = null;
  }
}
