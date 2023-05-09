import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShakeServiceService {
  private shakeThreshold = 20;
  private shakeTimeLimit = 1000;
  private lastShakeTime = new Date().getTime();
  private lastX: any = null;
  private lastY: any = null;
  private lastZ: any = null;

  constructor() {}

  public watchShake(): Observable<any> {
    return new Observable((observer) => {
      if (window.DeviceMotionEvent) {
        window.addEventListener(
          'devicemotion',
          (event) => {
            const acceleration: any = event.accelerationIncludingGravity;
            const currTime = new Date().getTime();

            if (currTime - this.lastShakeTime > this.shakeTimeLimit) {
              const diffTime = currTime - this.lastShakeTime;
              const x = acceleration.x;
              const y = acceleration.y;
              const z = acceleration.z;

              const speed =
                (Math.abs(x + y + z - this.lastX - this.lastY - this.lastZ) /
                  diffTime) *
                10000;

              if (speed > this.shakeThreshold) {
                observer.next();
                this.lastShakeTime = currTime;
              }

              this.lastX = x;
              this.lastY = y;
              this.lastZ = z;
            }
          },
          false
        );
      } else {
        alert('DeviceMotionEvent not supported');
      }
    });
  }
}
