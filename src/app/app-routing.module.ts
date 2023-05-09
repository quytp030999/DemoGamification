import { DemoGamificationModule } from './games-demo/demo-gamification.module';
import { TfPosenetComponent } from './pages/tf-posenet/tf-posenet.component';
import { CamTestComponent } from './pages/cam-test/cam-test.component';
import { GoogleSpeechToTextComponent } from './pages/google-speech-to-text/google-speech-to-text.component';
import { ChooseGitfsComponent } from './games/choose-gitfs/choose-gitfs.component';
import { CameraComponent } from './games/camera/camera.component';
import { DragDropComponent } from './pages/drag-drop/drag-drop.component';
import { VoiceActionComponent } from './games/voice-action/voice-action.component';
import { AudioDetectComponent } from './pages/audio-detect/audio-detect.component';
import { AnimationEightComponent } from './pages/animation-eight/animation-eight.component';
import { AnimationSixComponent } from './pages/animation-six/animation-six.component';
import { AnimationFiveComponent } from './pages/animation-five/animation-five.component';
import { AnimationFourComponent } from './pages/animation-four/animation-four.component';
import { AnimationThreeComponent } from './pages/animation-three/animation-three.component';
import { AnimationOneComponent } from './pages/animation-one/animation-one.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimationTwoComponent } from './pages/animation-two/animation-two.component';
import { AnimationSevenComponent } from './pages/animation-seven/animation-seven.component';
import { DifferentsPointComponent } from './games/differents-point/differents-point.component';
import { ClassifyComponent } from './games/classify/classify.component';
import { ShakeDemoComponent } from './games/shake-demo/shake-demo.component';
import { ShakeGiftsInBoxComponent } from './pages/shake-gifts-in-box/shake-gifts-in-box.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: ChooseGitfsComponent,
  // },
  // {
  //   path: 'home',
  //   component: HomePageComponent,
  // },
  // {
  //   path: 'animation-one',
  //   component: AnimationOneComponent,
  // },
  // {
  //   path: 'animation-two',
  //   component: AnimationTwoComponent,
  // },
  // {
  //   path: 'animation-three',
  //   component: AnimationThreeComponent,
  // },
  // {
  //   path: 'animation-four',
  //   component: AnimationFourComponent,
  // },
  // {
  //   path: 'animation-five',
  //   component: AnimationFiveComponent,
  // },
  // {
  //   path: 'animation-six',
  //   component: AnimationSixComponent,
  // },
  // {
  //   path: 'animation-seven',
  //   component: AnimationSevenComponent,
  // },
  // {
  //   path: 'animation-eight',
  //   component: AnimationEightComponent,
  // },
  // {
  //   path: 'audio-detect',
  //   component: AudioDetectComponent,
  // },
  // {
  //   path: 'drag-drop',
  //   component: DragDropComponent,
  // },
  // {
  //   path: 'cam-test',
  //   component: CamTestComponent,
  // },
  // {
  //   path: 'choose-gifts',
  //   component: ChooseGitfsComponent,
  // },
  // {
  //   path: 'diff-point',
  //   component: DifferentsPointComponent,
  // },
  // {
  //   path: 'voice-action',
  //   component: VoiceActionComponent,
  // },
  // {
  //   path: 'camera-action',
  //   component: CameraComponent,
  // },
  // {
  //   path: 'shake-demo',
  //   component: ShakeDemoComponent,
  // },
  // {
  //   path: 'classify-demo',
  //   component: ClassifyComponent,
  // },
  // {
  //   path: 'shake-in-box',
  //   component: ShakeGiftsInBoxComponent,
  // },
  // {
  //   path: 'tf-posenet',
  //   component: TfPosenetComponent,
  // },
  {
    path: 'demos',
    loadChildren: () =>
      import('./games-demo/demo-gamification.module').then(
        (m) => m.DemoGamificationModule
      ),
  },
  {
    path: '**',
    redirectTo: 'demos/puzzle',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), DemoGamificationModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
