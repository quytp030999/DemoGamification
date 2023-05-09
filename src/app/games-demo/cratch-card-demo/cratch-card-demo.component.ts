import { Component, HostListener, OnInit } from "@angular/core";
import { ServicesService } from "../services.service";
import { ScratchCard, SCRATCH_TYPE } from "scratchcard-js";

@Component({
  selector: "app-cratch-card-demo",
  templateUrl: "./cratch-card-demo.component.html",
  styleUrls: ["./cratch-card-demo.component.scss"],
})
export class CratchCardDemoComponent implements OnInit {
  canvas: any;
  ctx: any;

  scratchedPixels = 0;
  totalPixels: number = 0;
  threshold = 180;

  isScratching = false;
  scratchValid: boolean = true;

  isPlayGame: boolean = false;
  isFinishGame: boolean = false;

  fullname: string = "";
  phone: string = "";

  sc: any;

  constructor(private gameService: ServicesService) {}

  ngOnInit(): void {
    const scContainer: any = document.getElementById("js--sc--container");
    this.sc = new ScratchCard("#js--sc--container", {
      scratchType: SCRATCH_TYPE.CIRCLE,
      containerWidth: scContainer.offsetWidth,
      containerHeight: 300,
      imageForwardSrc: "../../../assets/demos/imgs/scratch-card/front.jpg",
      clearZoneRadius: 20,
      nPoints: 10,
      pointSize: 2,
      callback: function () {},
    });
  }

  // @HostListener('window:scroll', ['$event']) onScrollEvent($event: any) {
  //   $event.preventDefault();
  //   $event.stopPropagation();
  //   window.scrollTo(0, 0);
  // }

  playGame() {
    if (this.gameService.validateForm(this.fullname, this.phone) === true) {
      this.isPlayGame = true;
      this.initScratch();
    } else {
      alert("Điền đầy đủ thông tin trước khi tham gia");
    }
  }

  initScratch() {
    // Init
    this.sc
      .init()
      .then(() => {
        this.sc.canvas.addEventListener("scratch.move", () => {
          let percent = this.sc.getPercent().toFixed(2);
          console.log("percent", percent);
          if (percent >= 50) {
            setTimeout(() => {
              this.isFinishGame = true;
            }, 2000);
          }
        });
      })
      .catch((error: any) => {
        // image not loaded
        alert(error.message);
      });
    // // get canvas element and its context
    // this.canvas = document.getElementById('canvas');
    // this.ctx = this.canvas.getContext('2d');

    // // draw the scratch card background
    // this.ctx.fillStyle = '#333';
    // this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // this.totalPixels = this.canvas.width * this.canvas.height;

    // // set up the scratch card image
    // var img = new Image();
    // img.src = '../../../assets/demos/imgs/scratch-card/front.jpg'; //"https://via.placeholder.com/300x200?text=Scratch+Here";
    // img.onload = () => {
    //   this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
    // };
  }

  startScratch(event: any) {
    console.log("start");
    if (this.scratchValid === true) {
      this.isScratching = true;
    }
    this.scratch(event);
  }

  scratch(event: any) {
    console.log("move");

    if (this.isScratching) {
      const SCRATCH_SIZE = 20;

      this.ctx.globalCompositeOperation = "destination-out";
      this.ctx.beginPath();
      this.ctx.arc(event.offsetX, event.offsetY, SCRATCH_SIZE, 0, 2 * Math.PI);
      this.ctx.fill();

      let threshold = 0.8;
      if (threshold > 1 || threshold < 0) threshold = 1;
      var imageData = this.ctx.getImageData(
        0,
        0,
        this.canvas.width,
        this.canvas.height
      );
      let pix = imageData.data;
      let pixLength = pix.length;
      let pixelSize = pixLength * 0.25;

      var i = 1;
      var l = 0;
      for (i; i <= pixelSize; i++) {
        // 3, 7, 11 -> 4n-1
        if (0 === pix[4 * i - 1]) {
          l++;
        }
      }
      if (l > pixelSize * threshold) {
        this.scratchValid = false;
        setTimeout(() => {
          this.isFinishGame = true;
        }, 3000);
      }
    }
  }

  endScratch(event: any) {
    console.log("end");

    this.isScratching = false;
  }
}
