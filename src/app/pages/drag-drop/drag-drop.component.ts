import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss'],
})
export class DragDropComponent {
  stream: any;
  video: any;
  captureImage: any;

  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  done2 = [];

  drop(event: CdkDragDrop<string[]>) {
    console.log('event.previousContainer:::', event.previousContainer);
    console.log('event.container:::', event.container);

    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  dragPosition = { x: 0, y: 0 };

  changePosition() {
    this.dragPosition = {
      x: this.dragPosition.x + 50,
      y: this.dragPosition.y + 50,
    };
  }

  async startVideo() {
    try {
      this.video = document.getElementById('video');

      const canvas: any = document.getElementById('show-video');
      const context = canvas.getContext('2d');

      this.stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
      });

      this.video.srcObject = this.stream;
      this.video.play();

      setInterval(() => {
        // ctx.drawImage(this.video, 0, 0, 600, 800);
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.save();
        context.scale(-1, 1);
        context.translate(-canvas.width, 0);
        context.drawImage(this.video, 0, 0, 600, 800);
        context.restore();
      }, 1000 / 30); // 30 fps
    } catch (error) {
      console.error('getUserMedia error:', error);
    }
  }

  captureImg() {
    // Get the div element you want to capture
    const divToCapture: any = document.getElementById('example-boundary');

    html2canvas(divToCapture).then((canvas) => {
      const image = canvas.toDataURL();
      this.captureImage = image;
    });
  }
}
