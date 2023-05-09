import { Component, NgZone, OnInit } from '@angular/core';
import { gsap } from 'gsap';

declare const annyang: any;

@Component({
  selector: 'app-voice-action',
  templateUrl: './voice-action.component.html',
  styleUrls: ['./voice-action.component.scss'],
})
export class VoiceActionComponent implements OnInit {
  voiceActiveSectionDisabled: boolean = true;
  voiceActiveSectionError: boolean = false;
  voiceActiveSectionSuccess: boolean = false;
  voiceActiveSectionListening: boolean = false;
  voiceText: any;

  maxVolume: number = 0;

  isCompleted: string = 'none';
  message: string = '';

  constructor(private ngZone: NgZone) {}

  ngOnInit(): void {
    gsap.from('.bottle', {
      duration: 2,
      rotation: 360,
      x: 500,
      ease: 'power2.easeInOut',
    });
  }

  initializeVoiceRecognitionCallback(): void {
    alert('initializeVoiceRecognitionCallback');

    annyang.addCallback('error', (err: any) => {
      if (err.error === 'network') {
        alert('err.error network');
        this.voiceText = 'Internet is require';
        annyang.abort();
        this.ngZone.run(() => (this.voiceActiveSectionSuccess = true));
      } else if (this.voiceText === undefined) {
        alert('no err.error network');
        this.ngZone.run(() => (this.voiceActiveSectionError = true));
        annyang.abort();
      } else {
        alert('else error');
      }
    });

    annyang.addCallback('soundstart', (res: any) => {
      alert('soundstart');
      this.ngZone.run(() => (this.voiceActiveSectionListening = true));
    });

    annyang.addCallback('end', () => {
      console.log('sound end');
      if (this.voiceText === undefined) {
        this.ngZone.run(() => (this.voiceActiveSectionError = true));
        annyang.abort();
      }
    });

    annyang.addCallback('result', (userSaid: any) => {
      this.ngZone.run(() => (this.voiceActiveSectionError = false));

      let queryText: any = userSaid[0];

      alert('queryText:::' + queryText);

      annyang.abort();

      this.voiceText = queryText ? queryText : `can't hear`;

      this.ngZone.run(() => (this.voiceActiveSectionListening = false));
      this.ngZone.run(() => (this.voiceActiveSectionSuccess = true));
    });
  }

  startVoiceRecognition(): void {
    try {
      this.voiceActiveSectionDisabled = false;
      this.voiceActiveSectionError = false;
      this.voiceActiveSectionSuccess = false;
      this.voiceText = undefined;

      if (annyang) {
        let commands = {
          hello: () => {
            console.log('Hello there!');
          },
          alo: () => {
            console.log('I am doing well, thank you!');
            this.voiceText = 'Strongbow';
          },
        };

        annyang.addCommands(commands);

        this.initializeVoiceRecognitionCallback();

        annyang.start({ autoRestart: false });

        this.initSpeakAnimation();
        this.detectVolumeAudio();
      } else {
        alert('not support');
      }
    } catch (error) {
      alert('init voice::: ' + error);
    }
  }

  closeVoiceRecognition(): void {
    this.voiceActiveSectionDisabled = true;
    this.voiceActiveSectionError = false;
    this.voiceActiveSectionSuccess = false;
    this.voiceActiveSectionListening = false;
    // this.voiceText = undefined;

    if (annyang) {
      annyang.abort();
      gsap.killTweensOf('.mic-body');
      gsap.to('.mic-body', {
        scale: 1,
        duration: 0.1,
        opacity: 1,
      });
    }
  }

  initSpeakAnimation() {
    // Animate the scale of the microphone icon
    gsap.to('.mic-body', {
      duration: 0.6,
      scale: 1.2,
      ease: 'power1.in',
      opacity: 0.5,
      yoyo: true,
      repeat: -1,
    });
    // gsap.to('.mic-top', {
    //   duration: 0.6,
    //   scale: 1.2,
    //   ease: 'power1.in',
    //   opacity: 0.7,
    //   yoyo: true,
    //   repeat: -1,
    // });
  }

  detectVolumeAudio() {
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

          // console.log('Volume level:', Math.round(average));

          if (average > maxVolume) {
            maxVolume = Math.round(average);
          }

          animationFrameId = requestAnimationFrame(getVolume);
        };

        animationFrameId = requestAnimationFrame(getVolume);

        setTimeout(() => {
          stream.getTracks().forEach((track) => {
            track.stop();
          });
          cancelAnimationFrame(animationFrameId);
          this.closeVoiceRecognition();
          this.maxVolume = maxVolume;
          // console.log('maxVolume:::', this.maxVolume);
          // console.log('voiceText:::', this.voiceText);
          const result = this.detectSpeechVoice(this.maxVolume, this.voiceText);
          // console.log('result:::', result);
          if (result.flag) {
            // console.log(`You have ${result.point} point!`);
            this.message = `You have ${result.point} point!`;
            this.isCompleted = 'block';
          } else {
            // console.log('You Need Say STRONGBOW');
            this.message = 'You Need Say STRONGBOW';
            this.isCompleted = 'block';
          }
        }, 5000);
      })
      .catch((error) => {
        alert('Failed to get microphone input:' + error);
      });
  }

  detectSpeechVoice(maxVolume: number, voiceText: string) {
    var point: number = 0;
    var flag: boolean = false;
    if (!voiceText || !maxVolume) {
    } else {
      point += 3;
      if (maxVolume > 70) {
        point += 7;
      } else if (maxVolume > 60) {
        point += 6;
      } else if (maxVolume > 50) {
        point += 5;
      } else if (maxVolume > 40) {
        point += 4;
      } else if (maxVolume > 30) {
        point += 3;
      } else if (maxVolume > 20) {
        point += 2;
      } else if (maxVolume > 10) {
        point += 1;
      } else {
        point += 0;
      }
      flag = true;
    }
    return { flag, point };
  }

  onClickCongrats() {
    this.isCompleted = 'none';
  }
}
