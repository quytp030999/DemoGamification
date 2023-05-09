import { Component, OnInit, ViewChild } from '@angular/core';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import { NgxCaptureService } from 'ngx-capture';

@Component({
  selector: 'app-animation-eight',
  templateUrl: './animation-eight.component.html',
  styleUrls: ['./animation-eight.component.scss'],
})
export class AnimationEightComponent implements OnInit {
  @ViewChild('main', { static: true }) screen: any;

  constructor(private captureService: NgxCaptureService) {}

  ngOnInit(): void {}

  generateDomToImage() {
    var node: any = document.getElementById('main');
    domtoimage
      .toPng(node, { quality: 0.95 })
      .then((dataURL: any) => {
        console.log('dataURL:::', dataURL);
        // var img = new Image();
        // img.src = dataURL;
        // document.body.appendChild(img);
        var link = document.createElement('a');
        link.download = 'voucher-belas-spa-2023.png';
        link.href = dataURL;
        link.click();
      })
      .catch((error: any) => {
        console.log('error:::', error);
      });
    // domtoimage.toBlob(node).then((blob: any) => {
    //   // FileSaver.saveAs(blob, 'image.jpg');
    //   saveAs(blob, 'pretty image.png');
    // });
    // this.captureService
    //   .getImage(node, true)
    //   .toPromise()
    //   .then((img) => {
    //     console.log('img::: ', img);
    //   });
  }
}
