import { Component, NgZone } from '@angular/core';

import * as RecordRTC from 'recordrtc';
import { SpeechClient } from '@google-cloud/speech';
import { Buffer } from 'buffer';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-google-speech-to-text',
  templateUrl: './google-speech-to-text.component.html',
  styleUrls: ['./google-speech-to-text.component.scss'],
})
export class GoogleSpeechToTextComponent {
  mediaRecorder!: MediaRecorder;
  recordRTC!: RecordRTC;

  constructor(private http: HttpClient) {}

  async onRecordAudioMicro() {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream: MediaStream) => {
        this.mediaRecorder = new MediaRecorder(stream);
        this.recordRTC = new RecordRTC(stream, { type: 'audio' });
        this.mediaRecorder.start();
        this.recordRTC.startRecording();

        setTimeout(() => {
          this.stopRecording();
        }, 5000);
      })
      .catch((error: Error) => {
        console.error('Error starting recording: ', error);
      });
  }

  stopRecording() {
    this.mediaRecorder.stop();
    this.recordRTC.stopRecording(async () => {
      const blob = this.recordRTC.getBlob();
      console.log('blob:::', blob);
      const audioBuffer = await blob.arrayBuffer();
      console.log('audioBuffer:::', audioBuffer);

      const byteLength = audioBuffer.byteLength;
      const padding = byteLength % 2 !== 0 ? 1 : 0; // add padding if byte length is odd
      const paddedBuffer = new ArrayBuffer(byteLength + padding);
      const paddedView = new Uint8Array(paddedBuffer);
      const originalView = new Uint8Array(audioBuffer);
      paddedView.set(originalView);

      const audioData = new Int16Array(paddedView);
      console.log('audioData:::', audioData);
      const audioContent = Buffer.from(audioData).toString('base64');
      console.log('audioContent:::', audioContent);

      // data là buffer cần gửi đi
      const headers = new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json');
      const options = {
        headers: headers,
      };
      this.http
        .post('http://192.168.1.55:3333/audio', { data: audioContent  }, options)
        .subscribe(
          (response) => {
            console.log(response);
          },
          (error) => {
            console.error(error);
          }
        );

      // const client = new SpeechClient();
      // const config = {
      //   encoding: 'LINEAR16',
      //   sampleRateHertz: 16000,
      //   languageCode: 'en-US',
      // };
      // const audio = {
      //   content: audioContent,
      // };
      // const request: any = {
      //   config: config,
      //   audio: audio,
      // };

      // client
      //   .recognize(request)
      //   .then((response: any) => {
      //     const transcription = response.results[0].alternatives[0].transcript;
      //     console.log('Transcription: ', transcription);
      //   })
      //   .catch((error: Error) => {
      //     console.error('Error recognizing speech: ', error);
      //   });
    });
  }

  sendData() {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json') //octet-stream
      .set('Accept', 'application/json');
    const options = {
      headers: headers,
    };
    this.http
      .post('http://192.168.1.55:3333/audio', { data: 'abc' }, options)
      .subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.error(error);
        }
      );
  }
}
