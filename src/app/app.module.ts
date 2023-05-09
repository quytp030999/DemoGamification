import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AnimationOneComponent } from './pages/animation-one/animation-one.component';
import { AnimationTwoComponent } from './pages/animation-two/animation-two.component';
import { AnimationThreeComponent } from './pages/animation-three/animation-three.component';
import { AnimationFourComponent } from './pages/animation-four/animation-four.component';
import { AnimationFiveComponent } from './pages/animation-five/animation-five.component';
import { AnimationSixComponent } from './pages/animation-six/animation-six.component';
import { AnimationSevenComponent } from './pages/animation-seven/animation-seven.component';
import { AnimationEightComponent } from './pages/animation-eight/animation-eight.component';

import { NgxCaptureModule } from 'ngx-capture';
import { AudioDetectComponent } from './pages/audio-detect/audio-detect.component';
import { DifferentsPointComponent } from './games/differents-point/differents-point.component';
import { VoiceActionComponent } from './games/voice-action/voice-action.component';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { DragDropComponent } from './pages/drag-drop/drag-drop.component';
import { CameraComponent } from './games/camera/camera.component';
import { ChooseGitfsComponent } from './games/choose-gitfs/choose-gitfs.component';
import { ShakeDemoComponent } from './games/shake-demo/shake-demo.component';
import { ClassifyComponent } from './games/classify/classify.component';
import { ShakeGiftsInBoxComponent } from './pages/shake-gifts-in-box/shake-gifts-in-box.component';
import { GoogleSpeechToTextComponent } from './pages/google-speech-to-text/google-speech-to-text.component';
import { HttpClientModule } from '@angular/common/http';
import { CamTestComponent } from './pages/cam-test/cam-test.component';

import { WebcamModule } from 'ngx-webcam';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TfPosenetComponent } from './pages/tf-posenet/tf-posenet.component';
import { ChooseGiftsDemoComponent } from './games-demo/choose-gifts-demo/choose-gifts-demo.component';
import { CratchCardDemoComponent } from './games-demo/cratch-card-demo/cratch-card-demo.component';
import { PuzzleDemoComponent } from './games-demo/puzzle-demo/puzzle-demo.component';
import { FlipPictureDemoComponent } from './games-demo/flip-picture-demo/flip-picture-demo.component';
import { DifferentPointsDemoComponent } from './games-demo/different-points-demo/different-points-demo.component';
import { ShakeStickDemoComponent } from './games-demo/shake-stick-demo/shake-stick-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AnimationOneComponent,
    AnimationTwoComponent,
    AnimationThreeComponent,
    AnimationFourComponent,
    AnimationFiveComponent,
    AnimationSixComponent,
    AnimationSevenComponent,
    AnimationEightComponent,
    AudioDetectComponent,
    DifferentsPointComponent,
    VoiceActionComponent,
    DragDropComponent,
    CameraComponent,
    ShakeDemoComponent,
    ChooseGitfsComponent,
    ClassifyComponent,
    ShakeGiftsInBoxComponent,
    GoogleSpeechToTextComponent,
    CamTestComponent,
    TfPosenetComponent,
    ChooseGiftsDemoComponent,
    CratchCardDemoComponent,
    PuzzleDemoComponent,
    FlipPictureDemoComponent,
    DifferentPointsDemoComponent,
    ShakeStickDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxCaptureModule,
    DragDropModule,
    HttpClientModule,
    WebcamModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
