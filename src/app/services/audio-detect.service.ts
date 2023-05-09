import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AudioDetectService {
  audioContext!: AudioContext;
  source!: MediaStreamAudioSourceNode;
  analyser!: AnalyserNode;
  dataArray!: Uint8Array;

  constructor() {
    this.audioContext = new AudioContext();
  }

  async getMicrophone() {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    this.source = this.audioContext.createMediaStreamSource(stream);
    this.analyser = this.audioContext.createAnalyser();
    this.dataArray = new Uint8Array();
    this.dataArray = new Uint8Array(this.analyser.frequencyBinCount);
  }

  getVolume() {
    this.analyser.getByteTimeDomainData(this.dataArray);
    let values = 0;
    const length = this.dataArray.length;
    for (let index = 0; index < length; index++) {
      values += this.dataArray[index];
    }
    const average = values / length;
    return average;
  }
}
