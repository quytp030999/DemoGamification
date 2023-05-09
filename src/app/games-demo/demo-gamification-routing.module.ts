import { ShakeStickDemoComponent } from './shake-stick-demo/shake-stick-demo.component';
import { PuzzleDemoComponent } from './puzzle-demo/puzzle-demo.component';
import { FlipPictureDemoComponent } from './flip-picture-demo/flip-picture-demo.component';
import { DifferentPointsDemoComponent } from './different-points-demo/different-points-demo.component';
import { CratchCardDemoComponent } from './cratch-card-demo/cratch-card-demo.component';
import { ChooseGiftsDemoComponent } from './choose-gifts-demo/choose-gifts-demo.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'choose-gifts',
    component: ChooseGiftsDemoComponent,
  },
  {
    path: 'scratch-card',
    component: CratchCardDemoComponent,
  },
  {
    path: 'different-points',
    component: DifferentPointsDemoComponent,
  },
  {
    path: 'flip-picture',
    component: FlipPictureDemoComponent,
  },
  {
    path: 'puzzle',
    component: PuzzleDemoComponent,
  },
  {
    path: 'shake-stick',
    component: ShakeStickDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemoGamificationRoutingModule {}
