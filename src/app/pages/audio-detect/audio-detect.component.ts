import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AudioDetectService } from '../../services/audio-detect.service';
// import * as Tone from 'tone';
// import { Transport, Microphone, Volume } from "tone";

@Component({
  selector: 'app-audio-detect',
  templateUrl: './audio-detect.component.html',
  styleUrls: ['./audio-detect.component.scss'],
})
export class AudioDetectComponent implements OnInit {
  volume!: number;

  p5: any;

  mic: any;

  audioContext!: AudioContext;
  source!: MediaStreamAudioSourceNode;
  analyser!: AnalyserNode;
  dataArray!: Uint8Array;

  @ViewChild('canvas')
  canvas!: ElementRef<HTMLCanvasElement>;

  video: any;
  video2: any;

  canvasContext: any;

  maxVolume: number = 0;
  stream: any;

  isDragging = false;
  currentX: any;
  currentY: any;
  initialX: number = 0;
  initialY: number = 0;
  xOffset = 0;
  yOffset = 0;
  img: any;

  constructor(private audioService: AudioDetectService) {
    // this.mic = new Tone.UserMedia().toMaster();
    // this.detectVolumeAudio();
  }

  ngOnInit(): void {
    // this.volume = 0;
    // this.p5 = new p5(this.sketch);
  }

  async detectVolumeAudio() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      this.audioContext = new AudioContext();
      this.analyser = this.audioContext.createAnalyser();
      let microphone = this.audioContext.createMediaStreamSource(stream);
      let javascriptNode = this.audioContext.createScriptProcessor(2048, 1, 1);

      this.analyser.smoothingTimeConstant = 0.8;
      this.analyser.fftSize = 1024;

      microphone.connect(this.analyser);
      this.analyser.connect(javascriptNode);
      javascriptNode.connect(this.audioContext.destination);

      this.canvasContext = this.canvas.nativeElement.getContext('2d');

      javascriptNode.onaudioprocess = () => {
        var array = new Uint8Array(this.analyser.frequencyBinCount);
        this.analyser.getByteFrequencyData(array);
        var values = 0;

        var length = array.length;
        for (var i = 0; i < length; i++) {
          values += array[i];
        }

        var average = values / length;

        console.log('average::: ', Math.round(average));

        if (average > this.maxVolume) {
          this.maxVolume = average;
        }

        this.canvasContext.clearRect(0, 0, 150, 300);
        this.canvasContext.fillStyle = '#BadA55';
        this.canvasContext.fillRect(0, 300 - average, 150, 300);
        this.canvasContext.fillStyle = '#262626';
        this.canvasContext.font = '48px impact';
        this.canvasContext.fillText(Math.round(average), -2, 300);
      };

      setTimeout(() => {
        stream.getTracks().forEach((track) => {
          track.stop();
        });
        javascriptNode.onaudioprocess = null;
        console.log('maxVolume:::', this.maxVolume);
      }, 5000);
    } catch (error) {
      alert(error);
    }
  }

  detectVolumeAudio2() {
    let average = 0;
    let maxVolume = 0;
    let source;
    let animationFrameId: any;

    // Create an audio context
    const audioContext = new AudioContext();

    // Create an analyser node
    const analyser = audioContext.createAnalyser();

    // Get microphone input
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        // canvas for wave volume level
        this.canvasContext = this.canvas.nativeElement.getContext('2d');

        // Create a media stream source
        source = audioContext.createMediaStreamSource(stream);

        // Connect the source to the analyser
        source.connect(analyser);

        // Start a loop to get the volume level
        const getVolume = () => {
          const dataArray = new Uint8Array(analyser.frequencyBinCount);
          analyser.getByteFrequencyData(dataArray);

          let sum = 0;
          for (let i = 0; i < dataArray.length; i++) {
            sum += dataArray[i];
          }
          average = sum / dataArray.length;

          console.log('Volume level:', Math.round(average));

          if (average > maxVolume) {
            maxVolume = Math.round(average);
          }

          this.canvasContext.clearRect(0, 0, 150, 300);
          this.canvasContext.fillStyle = '#BadA55';
          this.canvasContext.fillRect(0, 300 - average, 150, 300);
          this.canvasContext.fillStyle = '#262626';
          this.canvasContext.font = '48px impact';
          this.canvasContext.fillText(Math.round(average), -2, 300);

          animationFrameId = requestAnimationFrame(getVolume);
        };

        animationFrameId = requestAnimationFrame(getVolume);

        setTimeout(() => {
          stream.getTracks().forEach((track) => {
            track.stop();
          });
          cancelAnimationFrame(animationFrameId);
          this.maxVolume = maxVolume;
          console.log('maxVolume:::', this.maxVolume);
        }, 5000);
      })
      .catch((error) => {
        console.error('Failed to get microphone input:', error);
      });
  }

  async detectVideo() {
    try {
      this.video = document.getElementById('video');

      const canvas: any = document.getElementById('si');
      const ctx = canvas.getContext('2d');

      this.stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
      });

      this.video.srcObject = this.stream;
      this.video.play();

      // const draw = () => {
      //   // Rotate the canvas by 90 degrees
      //   ctx.rotate(Math.PI / 2);

      //   // Draw the video frame onto the canvas
      //   ctx.drawImage(this.video, 0, 0, canvas.height, canvas.width);

      //   // Rotate the canvas back to its original position
      //   ctx.rotate(-Math.PI / 2);

      //   // Request the next frame
      //   requestAnimationFrame(draw);
      // };

      // requestAnimationFrame(draw);

      // this.video.addEventListener('play', () => {
      //   // Set the canvas dimensions to match the rotated video dimensions
      //   canvas.width = this.video.videoHeight;
      //   canvas.height = this.video.videoWidth;

      //   // Start the drawing loop
      //   requestAnimationFrame(draw);
      // });

      setInterval(() => {
        ctx.drawImage(this.video, 0, 0, 600, 800);
        // const image = new Image();
        // image.src = '../../../assets/imgs/2.png';
        // ctx.drawImage(image, 10, 10, 100, 100);
      }, 1000 / 60); // 30 fps
    } catch (error) {
      console.error('getUserMedia error:', error);
    }
  }

  async detectVideo2() {
    try {
      this.video = document.getElementById('video');
      this.img = document.getElementById('img');

      this.stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
      });
      // do something with the stream
      // this.video = document.querySelector('video');

      // const canvas: any = document.getElementById('si');
      // const ctx = canvas.getContext('2d');

      // this.video.srcObject = this.stream;
      // this.video.play();

      // setInterval(() => {
      //   ctx.drawImage(this.video, 0, 0, 640, 480);
      //   const image = new Image();
      //   image.src = '../../../assets/imgs/2.png';
      //   ctx.drawImage(image, 10, 10, 100, 100);
      // }, 1000 / 30); // 30 fps

      // Add item to video stream
      // var canvas = document.createElement('canvas');
      // canvas.width = this.video.videoWidth;
      // canvas.height = this.video.videoHeight;
      // var ctx: any = canvas.getContext('2d');
      // ctx.drawImage(this.video, 0, 0, canvas.width, canvas.height);

      // var img = new Image();
      // img.src = '../../../assets/imgs/1.jpeg';
      // ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      // this.video.src = canvas.toDataURL('image/webp');

      // img.style.position = 'absolute';
      // img.style.top = '0';
      // img.style.left = '0';
      // img.style.display = 'block';
      // img.style.width = '50%';
      // img.style.height = '50%';
      // this.video.appendChild(img);

      // ------------------------------------------- //
      this.video.srcObject = this.stream;
      this.video.play();
      this.video.appendChild(this.img);

      this.img.addEventListener('mousedown', this.dragStart);
      this.img.addEventListener('mouseup', this.dragEnd);
      this.img.addEventListener('mouseout', this.dragEnd);
      this.img.addEventListener('mousemove', this.drag);
    } catch (error) {
      console.error('getUserMedia error:', error);
    }
  }

  captureImg() {
    // const canvas: any = document.getElementById('capture');
    // const ctx = canvas.getContext('2d');
    // ctx.drawImage(this.video, 0, 0, canvas.width, canvas.height);

    // this.stream.getTracks().forEach((track: any) => {
    //   track.stop();
    // });

    // Get the canvas element
    var canvas: any = document.getElementById('si');

    // Get the 2D rendering context for the canvas
    var ctx = canvas.getContext('2d');

    // Draw something on the canvas
    ctx.fillRect(10, 10, 150, 100);

    // Get the image data as a PNG image
    var imgData = canvas.toDataURL('image/png');

    // Create a new image element with the image data
    var img = new Image();
    img.src = imgData;

    // Add the image to the body of the page
    document.body.appendChild(img);
  }

  dragStart(e: any) {
    this.initialX = e.clientX - this.xOffset;
    this.initialY = e.clientY - this.yOffset;
    this.isDragging = true;
  }

  dragEnd(e: any) {
    this.isDragging = false;
  }

  drag(e: any) {
    if (this.isDragging) {
      e.preventDefault();
      this.currentX = e.clientX - this.initialX;
      this.currentY = e.clientY - this.initialY;

      this.xOffset = this.currentX;
      this.yOffset = this.currentY;

      this.setTranslate(this.currentX, this.currentY, this.img);
    }
  }

  setTranslate(xPos: any, yPos: any, el: any) {
    el.style.transform = 'translate3d(' + xPos + 'px, ' + yPos + 'px, 0)';
  }

  analyserAudio() {
    var array = new Uint8Array(this.analyser.frequencyBinCount);
    this.analyser.getByteFrequencyData(array);
    var values = 0;

    var length = array.length;
    for (var i = 0; i < length; i++) {
      values += array[i];
    }

    var average = values / length;

    //          console.log(Math.round(average - 40));

    this.canvasContext.clearRect(0, 0, 150, 300);
    this.canvasContext.fillStyle = '#BadA55';
    this.canvasContext.fillRect(0, 300 - average, 150, 300);
    this.canvasContext.fillStyle = '#262626';
    this.canvasContext.font = '48px impact';
    this.canvasContext.fillText(Math.round(average - 40), -2, 300);
  } // end fn stream

  startMic() {
    // this.mic.start();
    // let levelMeter = new Tone.Volume();
    // this.mic.connect(levelMeter);
    // // You can access the volume level using the "value" property
    // let volume = levelMeter.value;
  }

  async toggleMicrophone() {
    if (!this.audioService.source) {
      await this.audioService.getMicrophone();
    }
    this.volume = this.audioService.getVolume();
  }

  toneInit() {
    // const mic = new Tone.UserMedia();
    // mic.open().then(() => {
    //   const level = new Tone.Analyser('fft', 16);
    //   mic.connect(level);
    //   // Lấy giá trị cường độ giọng nói
    //   const volume = level.getValue();
    //   console.log('volume:::: ', volume);
    // });
  }

  // sketch(p: any) {
  //   let mic: { start: () => void; getLevel: () => any; };
  //   let level;

  //   p.setup = () => {
  //     p.createCanvas(200, 200);
  //     mic = new p5.AudioIn();
  //     mic.start();
  //   }

  //   p.draw = () => {
  //     level = mic.getLevel();
  //     p.background(0);
  //     p.fill(255);
  //     p.ellipse(100, 100, level * 200, level * 200);
  //   };

  //   console.log("level:::", level);
  // }
}
